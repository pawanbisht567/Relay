In this we plan the architecture of the Relay application.

In this first user generally connects to internet, with all the flow get happening, like auth on connect, receives any new notification if there is, receive any new message if any,  Then
User A sends a message to User B, 
message is having some properties like
{
  message_id,
  sender_id,
  receiver_id,
  payload,
  encryption_used,
  sent_at
}

 this message is send it to server, 
 1. server will save this message, also server can store the message for Docs like image or PDF,
 2. give ack to sender user or User A that we receive the message
 3. Server than push the message to Receiver end user, 
 4. Also we put the information of the client when it sees the message and when It receives the message, also we ack the sender user when the message was recevied by user and when it sees that message. Blue tick and grey tick.
 5. Server also checks whenther the a particular user is OFFLINE or ONLINE, if ONLINE then send the message immediately or if OFFLINE than save it for later, whenever user comes online we send the message immediately.
 6. We don't retry to send a message to user if he is OFFLINE, we try Retry only when he is ONLINE.
 7.

We have only 3 states
| State     | Meaning                 |
| --------- | ----------------------- |
| SENT      | Server received message |
| DELIVERED | Receiver got message    |
| SEEN      | Receiver opened message |



What happens if user is offline?
Answer yes/no:

Do we store messages? → YES
Do we retry delivery? → YES
Do we send duplicate messages? → NO
