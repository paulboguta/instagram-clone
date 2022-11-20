export interface IUser {
  username: string;
  profilePic: string;
  bio: string;
  uid: string;
  postCounter: number;
  likedPosts: Array<string>;
  followers: Array<string>;
  following: Array<string>;
  theme: string;
}

export interface IUserState {
  users: IUser[];
}

export interface IFollower {
  profilePic: string;
  uid: string;
  username: string;
}
