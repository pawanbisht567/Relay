# Relay

Real-time communication platform built with TypeScript, Node.js, Redis, and event-driven microservices.

# Relay Project Context

## What is Relay
Relay is a real-time chat + notification system.
It is built as a serious backend/system-design project, not a tutorial app.

## Core Goals
- Practice real-world system design
- WebSocket-based messaging
- Offline message handling
- Auth with access + refresh tokens
- Production-grade DB design

## Tech Stack
- Node.js + TypeScript
- PostgreSQL
- Prisma ORM (adapter-based)
- WebSockets
- JWT (access + refresh tokens)

## Architectural Decisions
- Gateway service owns DB and Prisma
- Refresh tokens are stored in DB
- Access tokens are stateless JWT
- Snake_case column names
- Explicit message states (sent, delivered, seen)

## Non-Goals
- No UI focus
- No overengineering
- No tutorial copy-paste

## How AI should help
- Think like a senior backend engineer
- Avoid boilerplate/tutorial style
- Prefer clarity over cleverness

