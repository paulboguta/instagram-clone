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

export interface IComment {
  uid: string;
  comment: string;
}

export interface ILike {
  uid: string;
}
