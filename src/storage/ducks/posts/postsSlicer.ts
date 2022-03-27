import { PostProps } from '../../../global/types/post';
import { AppDispatch } from './../../index';
import { PostsState } from './types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../../services/api';

const INITIAL_STATE: PostsState = {
    posts: [],
    isLoading: true,
}

export const getPostsFromApi = () => async (dispatch: AppDispatch) => {
    const posts = await api.get<PostProps[]>('/posts')
                    .then(response => response.data) as PostProps[]
    dispatch(setPosts({posts, isLoading: false}))
}

const postsSlice = createSlice({
    name: 'posts',
    initialState: INITIAL_STATE,
    reducers: {
        setPosts: (state, action: PayloadAction<PostsState>) => {
            state.posts = action.payload.posts
            state.isLoading = action.payload.isLoading
        },
    },

})

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer
