export interface FormValues {
    email: string;
    password: string;
    nickname?: string;
}

// 로그인
export interface Login {
    email: string;
    password: string;
}

// 회원가입
export interface Join {
    email: string;
    password: string;
    nickname: string;
    profileEmoji?: string;
}

// 프로필 수정 patch api
export interface UpdateProfile {
    nickname: string;
    emoji?: string;
}

// 내 정보 조회 & 다른 api의 user 정보
export interface UserDto {
    id: number;
    email: string;
    profileEmoji: string;
    nickname: string;
    sequence: number;
}