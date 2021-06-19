import {Action, createReducer, on} from '@ngrx/store';
import {UserProfileStateInterface} from '../types/userProfileState.interface';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from './actions/getUserProfile.acton';

const initialSate: UserProfileStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const userProfileReducer = createReducer(
  initialSate,
  on(
    getUserProfileAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: UserProfileStateInterface, action: Action) {
  return userProfileReducer(state, action);
}
