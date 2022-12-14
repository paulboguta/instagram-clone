export enum ActionTypes {
  // posts
  GET_FEED_POSTS = "GET_FEED_POSTS",
  ADD_POST = "ADD_POST",
  ADD_COMMENT = "ADD_COMMENT",
  LIKE_POST = "LIKE_POST",
  UNLIKE_POST = "UNLIKE_POST",
  // users
  GET_ALL_USERS = "GET_ALL_USERS",
  SET_USER = "SET_USER",
  SET_THEME = "SET_THEME",
  SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE",
  DO_SETUP = "DO_SETUP",
  DO_FIRST_SETUP = "DO_FIRST_SETUP",
  DO_FOLLOW = "DO_FOLLOW",
  DO_UNFOLLOW = "DO_UNFOLLOW",
  // current user
  SET_CURRENT_USER = "SET_CURRENT_USER",
}
