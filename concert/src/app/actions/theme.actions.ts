import { Action } from '@ngrx/store';
import { Theme } from '../models/theme';

export const SET_THEME = 'Set Theme';

export class SetThemeAction implements Action {
  readonly type = SET_THEME;

  constructor(public payload: Theme) {}
}

export type All = SetThemeAction;
