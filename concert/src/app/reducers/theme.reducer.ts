import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/theme.actions';
import { THEME } from '../models/theme';
import { ThemeState } from './app.states';

export const initialState: ThemeState = {
  theme: { theme: 'theme-teal'}
};

export function reducer(state = initialState, action: fromActions.All): ThemeState {
  switch (action.type) {
    case fromActions.SET_THEME: {
      return Object.assign({}, {theme: action.payload});
    }
    default: {
      return state;
    }
  }
}

export const getThemeState = createFeatureSelector < ThemeState > ('themeState');

export const getTheme = createSelector(
  getThemeState,
  (state: ThemeState) => state.theme
);
