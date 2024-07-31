import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
// types
import { UserDto } from "../types/data/user";

const { persistAtom } = recoilPersist({
  key: "localStorage",
  storage: localStorage,
});

export const userState = atom<UserDto | null>({
  key: "userState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
