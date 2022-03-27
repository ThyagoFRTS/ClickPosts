import { UserProps } from '../../../global/types/users';

export interface UsersState {
    users: UserProps[],
    isLoading: boolean,
}