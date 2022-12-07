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

export interface IFollower {
  uid: string;
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
