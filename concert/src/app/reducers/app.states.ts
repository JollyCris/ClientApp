import { Theme } from '../models/theme';

export interface AppState {
  themeState: ThemeState;
}

export interface ThemeState {
  theme: Theme;
}
