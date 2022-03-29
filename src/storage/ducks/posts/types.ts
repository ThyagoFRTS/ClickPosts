import { PostProps } from "../../../global/types/post"

export type PostsState = {
    posts: PostProps[],
    isLoading: boolean,
    lastPostIndex: number,
}