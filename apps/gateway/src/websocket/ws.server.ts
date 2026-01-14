import WebSocket, { WebSocketServer } from 'ws'
import http from 'http'
import jwt from 'jsonwebtoken'
import { env } from '../config/env';
import { addConnection, removeConnection, getConnection } from './connection.manager'

interface AuthPayload {
  userId: string;
}

export function createWebSocketServer(server: http.Server) {
  const wss = new WebSocketServer({ server })

  wss.on('connection', (ws: WebSocket, req) => {
    try {
      const url = new URL(req.url || '', `http://${req.headers.host}`)
      const token = url.searchParams.get('token')
      console.log('WebSocket connection attempt with token:', token)
      if (!token) {
        console.log('Missing auth token, closing connection')
        ws.close(1008, 'Missing auth token')
        return
      }
      console.log('Verifying token...', env.JWT_SECRET)
      const payload = jwt.verify(
        token,
        env.JWT_SECRET
      ) as AuthPayload
      console.log('payload:', payload)
      // attach userId to socket
      ;(ws as any).userId = payload.userId

      console.log(`User ${payload.userId} connected via WebSocket`)
      addConnection(payload.userId, ws)
      ws.send(JSON.stringify({ type: 'CONNECTED' }))

      ws.on('message', (data) => {
        const message = data.toString()
        console.log(`Message from ${payload.userId}: ${message}`)
      })

      ws.on('close', () => {
        removeConnection(payload.userId)
        console.log(`User ${payload.userId} disconnected`)
      })
    } catch (err) {
      ws.close(1008, 'Invalid auth token')
    }
  })

  return wss
}