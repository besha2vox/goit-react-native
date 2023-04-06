import { createSlice } from "@reduxjs/toolkit";
import { initialPostsState } from "./initialPostsState ";

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    addPost(state, { payload }) {
      state.posts.push(payload);
    },
    addComment(state, { payload }) {
      const postIndex = state.posts.findIndex((post) => post.id === payload.id);
      state.posts[postIndex].comments.push(payload.comment);
    },
    addLike(state, { payload }) {
      const postIndex = state.posts.findIndex((post) => post.id === payload);
      state.posts[postIndex].likesCount += 1;
    },
    setCurrentPostId(state, { payload }) {
      state.currentPostId = payload;
    },
  },
});

export const { addPost, addComment, addLike, setCurrentPostId } =
  postsSlice.actions;

export const postsReducer = postsSlice.reducer;
