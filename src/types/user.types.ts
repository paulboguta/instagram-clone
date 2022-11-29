export interface IUser {
  username: string;
  profilePic: string;
  bio: string;
  uid: string;
  postCounter: number;
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
  postCounter: number;
  followers: IFollower[];
  following: IFollower[];
  isOnOwnProfile: boolean;
}
