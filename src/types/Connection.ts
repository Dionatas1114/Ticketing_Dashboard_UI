export type ConnectionProps = {
  name: string;
  greetingMessage?: string;
  farewellMessage?: string;
  isDefault?: boolean;
};

export type Connection = {
  id: number;
  status?: string;
  session?: string;
  qrcode?: string;
  battery?: string;
  plugged?: string;
  retries?: number;
  userId?: number;
  user?: User[];
  queues?: Queue[];
  tickets?: Ticket[];
  createdAt?: Date;
  updatedAt?: Date;
} & ConnectionProps;
