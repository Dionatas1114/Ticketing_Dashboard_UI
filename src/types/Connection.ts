export type Connection = {
  id: number;
  name: string;
  status?: string;
  session?: string;
  qrcode?: string;
  battery?: string;
  plugged?: string;
  isDefault?: number;
  retries?: number;
  userId?: number;
  greetingMessage?: string;
  farewellMessage?: string;
  user?: User[];
  queues?: Queue[];
  tickets?: Ticket[];
  createdAt?: Date;
  updatedAt?: Date;
};
