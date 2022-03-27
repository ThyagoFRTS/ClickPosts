import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsSlicer from './ducks/posts/postsSlicer';
import usersSlice from './ducks/users/usersSlice';

const store = configureStore({
    reducer: {
        posts: postsSlicer,
        users: usersSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;