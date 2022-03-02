export type User = {
  createdAt: Date;
  firstName: string | null;
  gurantorId: string;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
