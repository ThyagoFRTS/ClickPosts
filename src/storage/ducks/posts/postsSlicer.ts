import {  AppDispatch } from './../../index';
import { PostsState } from './types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

const INITIAL_STATE: PostsState = {
    posts: [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }]
}
const fetchUserById = createAsyncThunk(
    'posts/getPostsFromDatabase',
    async (userId, thunkAPI) => {
      await setTimeout(() => {  console.log("World!"); }, 2000);
    }
  )

export function getPostsFromDatabase() {
    return function (dispatch: AppDispatch){

    }
}

const postsSlice = createSlice({
    name: 'posts',
    initialState: INITIAL_STATE,
    reducers: {
        
        extraReducers: (builder) => {
            
        }
    },

})

export const { } = postsSlice.actions;
export default postsSlice.reducer
