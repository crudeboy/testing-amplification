export type UserCreateInput = {
  firstName?: string | null;
  gurantorId: string;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
