export type UserUpdateInput = {
  firstName?: string | null;
  gurantorId?: string;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
