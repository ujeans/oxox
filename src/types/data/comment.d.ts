import { UserDto } from "./user";

export interface Reactions {
  [key: string]: number; // map으로 반환
}

export interface CommentDto {
  id: number;
  content: string;
  user: UserDto;
  createAt: string;
  reactions: Reactions;
  myReaction: string;
}

export interface CreateCommentDto {
  postId: number;
  content: string;
}

// 댓글 목록 조회
export type CommentDtoList = CommentDto[];
