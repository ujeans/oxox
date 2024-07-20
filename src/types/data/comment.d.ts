import {UserDto} from "./user";

export interface Reactions {
    [key: string]: number; // map으로 반환
}

export interface CommentDto {
    id: number;
    content: string;
    user: UserDto;
    createAt: string;
    reactions: Reactions;
}

export interface CreateCommentDto {
    postId: number;
    content: string;
}