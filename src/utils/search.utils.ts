import { IUser } from "types/user.types";

export const requestSearchUsers = (searchValue: string, users: IUser[]) => {
  if (searchValue.length) {
    const searchedUser = users.filter((user: IUser) => {
      return user.username?.toLowerCase().includes(searchValue.toLowerCase());
    });
    return searchedUser;
  }
  return [];
};
