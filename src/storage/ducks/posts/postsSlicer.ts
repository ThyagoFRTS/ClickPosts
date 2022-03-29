import { PostProps } from './../../../global/types/post';
import { AppDispatch } from './../../index';
import { PostsState } from './types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../../services/api';
import { sortPosts } from '../../../utils/handleArrays';
import { action } from 'typesafe-actions';

type NewPost = {
    title: string,
    body: string,
    userId: number,
}

const INITIAL_STATE: PostsState = {
    posts: [],
    isLoading: true,
}

export const getPostsFromApi = () => async (dispatch: AppDispatch) => {
    const posts = await api.get<PostProps[]>('/posts')
        .then(response => response.data) as PostProps[]
    posts.sort(sortPosts)
    dispatch(setPosts({ posts, isLoading: false }))
}

export const createPost = (newPost: NewPost) => async (dispatch: AppDispatch) => {
    const headers = { 'Content-type': 'application/json; charset=UTF-8' };
    const post = await api.post<PostProps[]>('/posts', newPost, {headers})
        .then(response => response.data) as PostProps
    console.log(post)
    dispatch(addPost(post))
}

export const deletePost = (itemId: number) => async (dispatch: AppDispatch) => {
    const headers = { 'Content-type': 'application/json; charset=UTF-8' };
    const status = await api.delete<PostProps[]>(`/posts/${itemId}`)
        .then(response => response.status) as PostProps
    console.log(status)
    dispatch(deletPost(itemId))
}

const postsSlice = createSlice({
    name: 'posts',
    initialState: INITIAL_STATE,
    reducers: {
        setPosts: (state, action: PayloadAction<PostsState>) => {
            state.posts = action.payload.posts
            state.isLoading = action.payload.isLoading
        },
        addPost: (state, action: PayloadAction<PostProps>) => {
            state.posts = [{...action.payload}].concat(state.posts) 
        },
        deletPost: (state, action: PayloadAction<number>) => {
            state.posts =state.posts.filter((item) => item.id != action.payload)
        }
    },

})

export const { setPosts, addPost, deletPost } = postsSlice.actions;
export default postsSlice.reducer
