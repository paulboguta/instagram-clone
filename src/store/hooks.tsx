import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "./store";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// https://redux.js.org/tutorials/typescript-quick-start
