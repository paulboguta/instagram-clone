import { combineReducers } from "redux";
import currentUserSlice from "user/store/slices/currentUserSlice";
import usersSlice from "user/store/slices/usersSlice";
import postReducer from "./reducers/postReducers";
import currentProfileReducer from "./reducers/currentProfileReducer";

export const rootReducer = combineReducers({
  postReducer,
  currentProfileReducer,
  users: usersSlice,
  currentUser: currentUserSlice,
});
