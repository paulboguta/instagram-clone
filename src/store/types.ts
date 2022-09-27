export interface IUser {
  username: string;
  profilePicture: string;
  bio: string;
  userID: string;
  postCounter: number;
  likedPosts: Array<string>;
  followers: Array<string>;
  following: Array<string>;
  theme: string;
}

export interface IUserState {
  users: IUser[];
}
