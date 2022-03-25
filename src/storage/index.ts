import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsSlicer from './ducks/posts/postsSlicer';

const store = configureStore({
    reducer: {
        posts: postsSlicer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch