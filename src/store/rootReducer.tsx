import { combineReducers } from "redux";
import userSlice from "./slices/userSlice/userSlice";

export const rootReducer = combineReducers({ user: userSlice });
