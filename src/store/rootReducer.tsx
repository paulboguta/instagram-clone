import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";

export const rootReducer = combineReducers({ currentUser });
