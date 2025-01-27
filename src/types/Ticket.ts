export type Ticket = {
  id: number;
  userId?: number;
  status?: string;
  lastMessage?: string;
  isGroup?: number;
  unreadMessages?: number;
  contact?: number;
  whatsapp?: number;
  queue?: number;
  createdAt?: Date;
  updatedAt?: Date;
};
