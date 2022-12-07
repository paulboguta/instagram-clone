import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store/store";
import { getFeedPosts } from "../services/posts.service";
import { IPost } from "../types";

interface IPostsState {
  posts: IPost[];
  loading: boolean;
  error: null | string;
}

const initialState = {
  posts: [],
  loading: false,
  error: null,
} as IPostsState;

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const posts = await getFeedPosts();
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: (state, action) => {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            uid: action.payload.uid,
            image: action.payload.image,
            description: action.payload.description,
            likes: [],
            comments: [],
            username: action.payload.username,
            id: action.payload.id,
            date: action.payload.date,
          },
        ],
      };
    },
    addComment: (state, action) => {
      return {
        ...state,
        posts: state.posts?.map((post) => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              comments: action.payload.comments,
            };
          }
          return { ...post };
        }),
      };
    },
    updatePostLikes: (state, action) => {
      return {
        ...state,
        posts: state.posts?.map((post) => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              likes: action.payload.likes,
            };
          }
          return { ...post };
        }),
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = [...action.payload];
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      });
  },
});

export const selectPosts = (state: RootState) => state.rootReducer.posts.posts;

export const { createPost, addComment, updatePostLikes } = postsSlice.actions;

export default postsSlice.reducer;
