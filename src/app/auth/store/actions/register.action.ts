import {createAction, props} from '@ngrx/store';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';

import {ActionTypes} from '../actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISER,
  props<RegisterRequestInterface>()
);
