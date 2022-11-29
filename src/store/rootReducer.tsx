import { combineReducers } from "redux";

import postReducer from "./reducers/postReducers";
import usersReducer from "./reducers/usersReducer";
import currentUser from "./reducers/currentUserReducer";

export const rootReducer = combineReducers({
  usersReducer,
  currentUser,
  postReducer,
});
