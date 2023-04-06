import 'styled-components';
import { theme } from './theme-obj.js';

type CustomDefaultTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomDefaultTheme {}
}
