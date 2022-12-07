import { combineReducers } from "redux";
import currentUserSlice from "features/user/store/currentUserSlice";
import usersSlice from "features/user/store/usersSlice";
import postsSlice from "features/posts/store/postsSlice";
import currentProfileReducer from "./reducers/currentProfileReducer";

export const rootReducer = combineReducers({
  posts: postsSlice,
  currentProfileReducer,
  users: usersSlice,
  currentUser: currentUserSlice,
});
