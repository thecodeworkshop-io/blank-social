// Store types

type Conversation = {
  id: string
  participants: string[]
  profileId: string
  profileName: string
  profileAvatar: string
  userName: string
  userAvatar: string
  messages: Message[]
}

type Message = {
  id?: string
  conversationId: string
  senderId: string
  recipientId?: string
  type: 'message' | 'gift'
  content?: string
  giftId?: number
  giftValue?: number
  timestamp?: string
  status?: 'sent' | 'delivered' | 'read'
}

type ChatProfile = {
  id: string
  name?: string
  chat_nickname?: string
  images?: {
    directus_files_id: string
  }[]
  avatar?: string
  user?: { id: string }
}

export type { Conversation, Message, ChatProfile }
