import WebSocket from 'ws'

const activeConnections = new Map<string, WebSocket>()

export function addConnection(userId: string, ws: WebSocket) {
  activeConnections.set(userId, ws)
}

export function removeConnection(userId: string) {
  activeConnections.delete(userId)
}

export function getConnection(userId: string) {
  return activeConnections.get(userId)
}