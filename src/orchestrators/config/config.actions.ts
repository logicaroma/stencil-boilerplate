import {
  Dispatch
} from 'redux';

import {
  GlobalStoreState
} from '../../redux/store';

export enum ConfigActions {
  CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
}

export interface ChangeLanguageAction {
  type: ConfigActions.CHANGE_LANGUAGE;
  payload: string;
}

export function changeLanguage(language: string): any {
  return async (dispatch: Dispatch<GlobalStoreState>): Promise<ChangeLanguageAction> => {
    return dispatch({
      type: ConfigActions.CHANGE_LANGUAGE as ConfigActions.CHANGE_LANGUAGE,
      payload: language
    });
  };
}

export type ConfigActionTypes = ChangeLanguageAction;
