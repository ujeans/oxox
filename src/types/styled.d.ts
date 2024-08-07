import { Theme as EmotionTheme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends EmotionTheme {
    colors: typeof colors;
    typography: typeof typography;
  }
}
