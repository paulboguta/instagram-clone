import { ADD_POST } from "../actions/postActions";

interface IPost {
  uid: string;
  image: string;
  description: string;
  likes: [];
  comments: [];
  username: string;
  profilePic: string;
}

interface IPostState {
  posts: IPost[];
}

const initialState: IPostState = {
  posts: [],
};

interface IAction {
  type: string;
  uid?: string;
  image?: string;
  description?: string;
  username?: string;
  profilePic?: string;
}

const postReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state.posts,
        {
          uid: action.uid,
          image: action.image,
          description: action.description,
          likes: [],
          comments: [],
          username: action.username,
          profilePic: action.profilePic,
        },
      ];
    default:
      return state;
  }
};

export default postReducer;