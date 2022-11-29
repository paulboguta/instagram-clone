import { combineReducers } from "redux";

import postReducer from "./reducers/postReducers";
import usersReducer from "./reducers/usersReducer";
import currentUser from "./reducers/currentUserReducer";
import currentProfileReducer from "./reducers/currentProfileReducer";

export const rootReducer = combineReducers({
  usersReducer,
  currentUser,
  postReducer,
  currentProfileReducer,
});
