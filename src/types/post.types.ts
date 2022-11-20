export interface IPost {
  uid: string;
  image: string;
  description: string;
  likes: [];
  comments: [];
  username: string;
  dateAdded?: Date;
  id?: string;
}

export interface IPostState {
  posts: IPost[];
}
