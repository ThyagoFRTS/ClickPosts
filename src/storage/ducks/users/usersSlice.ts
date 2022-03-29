import { action } from 'typesafe-actions';
import { sortUsers } from './../../../utils/handleArrays';
import { UserProps } from './../../../global/types/users';
import { AppDispatch } from './../../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersState } from './types';
import { api } from '../../../services/api';

const INITIAL_STATE: UsersState = {
    users: [],
    isLoading: true,
}

export const getUsersFromApi = () => async (dispatch: AppDispatch) => {
    const users = await api.get<UsersState>('/users')
                    .then(response => response.data) as UserProps[]
    users.sort(sortUsers)
    dispatch(setUsers({users, isLoading: false}))
}

const usersSlice = createSlice({
    name: 'users',
    initialState: INITIAL_STATE,
    reducers: {
        setUsers: (state, action: PayloadAction<UsersState>) => {
            state.users = action.payload.users
            state.isLoading = action.payload.isLoading
        },
    }
})

export const { setUsers } = usersSlice.actions
export default usersSlice.reducer
