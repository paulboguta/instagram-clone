import { combineReducers } from "redux";

import user from "./reducers/userReducer";
import currentUser from "./reducers/currentUserReducer";

export const rootReducer = combineReducers({ user, currentUser });
