import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from 'src/app/shared/types/appState.interface';
import {AuthStateInterface} from '../types/authState.inerface';

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface):boolean => authState.isSubmitting
)
