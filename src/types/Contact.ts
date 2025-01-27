export type Contact = {
  id: number;
  name: string;
  number: string;
  email?: string;
  isGroup?: boolean;
  profilePicUrl?: string;
  tickets?: Ticket[];
  createdAt?: Date;
  updatedAt?: Date;
};
