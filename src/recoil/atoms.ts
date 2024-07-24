import { atom } from "recoil";
// types
import { UserDto } from "../types/data/user";

export const userState = atom<UserDto | null>({
  key: "userState",
  default: null,
});
