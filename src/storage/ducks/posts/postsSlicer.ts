import { PostProps } from './../../../global/types/posts';
import { AppDispatch } from './../../index';
import { PostsState } from './types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../../services/api';

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



export const getPostsFromApi = () => async (dispatch: AppDispatch) => {
    const posts = await api.get<PostsState>('/posts')
                    .then(response => response.data) as PostProps[]
    dispatch(setPosts(posts))
}

const postsSlice = createSlice({
    name: 'posts',
    initialState: INITIAL_STATE,
    reducers: {
        setPosts: (state, action: PayloadAction<PostProps[]>) => {
            state.posts = action.payload  
        },
    },

})

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer
