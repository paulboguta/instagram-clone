export interface IUser {
  // name: string;
  username: string;
  profilePicture: string;
  // profileBackground: string;
  bio: string;
  userID: string;
  postCounter: number;
  likedPosts: Array<string>;
  followers: Array<string>;
  following: Array<string>;
  theme: string;
}
