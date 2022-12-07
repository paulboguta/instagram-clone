import { combineReducers } from "redux";
import currentUserSlice from "features/user/store/currentUserSlice";
import usersSlice from "features/user/store/usersSlice";
import postsSlice from "features/posts/store/postsSlice";

export const rootReducer = combineReducers({
  posts: postsSlice,
  users: usersSlice,
  currentUser: currentUserSlice,
});
