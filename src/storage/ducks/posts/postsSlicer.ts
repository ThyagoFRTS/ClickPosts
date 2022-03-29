import { useAppDispatch } from './../../../hooks/redux';
import { PostProps } from './../../../global/types/post';
import store, { AppDispatch } from './../../index';
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

type PatchPost = {
    title: string,
    body: string,
    userId: number,
    id: number
}

const INITIAL_STATE: PostsState = {
    posts: [],
    isLoading: true,
    lastPostIndex: 0,
}

export const getPostsFromApi = () => async (dispatch: AppDispatch) => {
    const posts = await api.get<PostProps[]>('/posts')
        .then(response => response.data) as PostProps[]
    posts.sort(sortPosts)
    dispatch(setPosts({ posts, isLoading: false, lastPostIndex: posts[0].id }))
}

export const createPost = (newPost: NewPost) => async (dispatch: AppDispatch) => {
    const headers = { 'Content-type': 'application/json; charset=UTF-8' };
    const post = await api.post<PostProps>('/posts', newPost, { headers })
        .then(response => {
            if (response.status == 201) {
                return response.data
            }
        })
    if (post) {
        dispatch(updateLastPostIndex())
        dispatch(addPost(post))
    }
}

export const updatePost = (post: PatchPost ) => async (dispatch: AppDispatch) => {
    const headers = { 'Content-type': 'application/json; charset=UTF-8' };
    const updatedPost = await api.put<PatchPost>(`/posts/${post.id}`, post, { headers })
        .then(response => {
            
            if (response.status == 200) {
                return response.data
            }
        })
    dispatch(putPost(post))
}

export const deletePost = (itemId: number) => async (dispatch: AppDispatch) => {
    const status = await api.delete<number>(`/posts/${itemId}`)
        .then(response => response.status)
    dispatch(removePost(itemId))
}

const postsSlice = createSlice({
    name: 'posts',
    initialState: INITIAL_STATE,
    reducers: {
        setPosts: (state, action: PayloadAction<PostsState>) => {
            state.posts = action.payload.posts
            state.isLoading = action.payload.isLoading
            state.lastPostIndex = action.payload.lastPostIndex
        },
        updateLastPostIndex: (state) => {
            state.lastPostIndex += 1
        },
        addPost: (state, action: PayloadAction<PostProps>) => {
            state.posts = [{ ...action.payload, id: state.lastPostIndex }].concat(state.posts)
        },
        removePost: (state, action: PayloadAction<number>) => {
            state.posts = state.posts.filter((item) => item.id != action.payload)
        },
        putPost: (state, action: PayloadAction<PostProps>) => {    
            state.posts = state.posts.map(item => {
                if (item.id == action.payload.id){
                    return action.payload   
                }
                return item
            })
        }
    },

})

export const { setPosts, addPost, removePost, putPost, updateLastPostIndex } = postsSlice.actions;
export default postsSlice.reducer
