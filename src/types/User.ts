export type User = {
  id: number;
  name: string;
  email: string;
  profile?: string;
  customer?: string;
  queues?: Queue[];
  createdAt?: Date;
  updatedAt?: Date;
};
