import {createAction, props} from '@ngrx/store';

import {ActionTypes} from '../../store/actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISER,
  props<{username: string; email: string; password: string}>()
);
