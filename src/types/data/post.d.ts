import { UserDto } from "./user";

// 게시글 기본 정보
interface BasePostDto {
  id: number;
  title: string;
  thumbnailUrl: string;
  content: string;
  user: UserDto;
  createAt: string;
  done: boolean;
  commentCount: number;
  agreeCount: number;
  disAgreeCount: number;
}

// 게시글 생성
export interface CreatePostDto {
  title: string;
  content: string;
  thumbnail?: File;
}
// 게시글 댠일 항목
export interface PostDto extends BasePostDto {}

// 게시글 목록 조회
export type PostDtoList = PostDto[];

// 게시글 상세 조회
export interface PostDetailDto extends BasePostDto {
  content: string;
  user: UserDto;
  comments: CommentDto[];
}
