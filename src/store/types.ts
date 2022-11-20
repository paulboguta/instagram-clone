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
  firstSetupDone: boolean;
}

export interface IUserState {
  users: IUser[];
}

export enum ActionTypes {
  // posts
  ADD_POST = "ADD_POST",
  ADD_COMMENT = "ADD_COMMENT",
  LIKE_POST = "LIKE_POST",
  UNLIKE_POST = "UNLIKE_POST",
  // users
  SET_USER = "SET_USER",
  DO_SETUP = "DO_SETUP",
  DO_FIRST_SETUP = "DO_FIRST_SETUP",
  DO_FOLLOW = "DO_FOLLOW",
  DO_UNFOLLOW = "DO_UNFOLLOW",
  // current user
  SET_CURRENT_USER = "SET_CURRENT_USER",
}
