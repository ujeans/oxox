import {UserDto} from "./user";

export interface CreatePostDto {
    title: string;
    content: string;
}

// 게시글 생성
export interface CreatePostDto {
    createPostDto: CreatePostDto;
    thumbnail?: File;
}

// 게시글 상세조회
export interface PostDetailDto {
    id: number;
    title: string;
    thumbnailUrl: string;
    content: string;
    user: UserDto;
    createAt: string;
    isDone: boolean;
    commentCount: number;
    agreeCount: number;
    disAgreeCount: number;
    comments: Comment[];
}

// 게시글 목록 조회
export type PostDtoList = PostSummary[];

export interface PostDto {
    id: number;
    title: string;
    thumbnailUrl: string;
    createAt: string;
    isDone: boolean;
    commentCount: number;
    agreeCount: number;
    disAgreeCount: number;
}

