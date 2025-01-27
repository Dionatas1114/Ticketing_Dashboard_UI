export type QuickAnswer = {
  id: number;
  shortcut: string;
  message: string;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
};
