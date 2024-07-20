export interface Vote {
    postId: number;
    isYes?: boolean; // nullable null입력 시 투표 취소
}
