Models

User {
  id
  name
  email
  joined_at
  username
}

Message {
  id
  sender_id
  receiver_id
  text
  media_file
  encryption_used
  sent_at
  delivered_at
  seen_at
}
