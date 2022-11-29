import { IPost } from "./post.types";

export interface IUser {
  username: string;
  profilePic: string;
  bio: string;
  uid: string;
  likedPosts: IFollower[];
  followers: IFollower[];
  following: IFollower[];
  theme: string;
}

export interface IUserState {
  users: IUser[];
}

export interface IFollower {
  uid: string;
}

export interface ICurrentProfile {
  uid: string;
  username: string;
  bio: string;
  profilePic: string;
  followers: IFollower[];
  following: IFollower[];
  isOnOwnProfile: boolean;
  posts: IPost[];
}

export interface ICurrentUser {
  uid: string;
  username: string;
  bio: string;
  profilePic: string;
  likedPosts: IFollower[];
  followers: IFollower[];
  following: IFollower[];
  theme: string;
}
