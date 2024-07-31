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

export interface CommentList {
  comments: CommentDto[];
  totalPage: number;
  totalElement: number;
}
