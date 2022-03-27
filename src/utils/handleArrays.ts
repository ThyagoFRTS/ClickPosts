import { UserProps } from './../global/types/users';
import { PostProps } from '../global/types/post';

export const sortPosts = (item1: PostProps, item2: PostProps) => {
    if (item1.id < item2.id) {
        return 1;
    }
    if (item1.id > item2.id) {
        return -1;
    }
    return 0;
}

export const sortUsers = (item1: UserProps, item2: UserProps) => {
    if (item1.id < item2.id) {
        return 1;
    }
    if (item1.id > item2.id) {
        return -1;
    }
    return 0;
}