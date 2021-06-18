import {Action, createReducer, on} from '@ngrx/store';
import {EditArticlleStateInterface} from '../types/createArticleState.interface';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from './actions/editArticle.action';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/getArticle.action';

const initialState: EditArticlleStateInterface = {
  isLoading: false,
  isSubmitting: false,
  validationErrors: null,
  article: null,
};

const editArticleReducer = createReducer(
  initialState,
  on(
    updateArticleAction,
    (state): EditArticlleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),

  on(
    updateArticleSuccessAction,
    (state): EditArticlleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),

  on(
    updateArticleFailureAction,
    (state, action): EditArticlleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),

  on(
    getArticleAction,
    (state): EditArticlleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),

  on(
    getArticleSuccessAction,
    (state, action): EditArticlleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),

  on(
    getArticleFailureAction,
    (state): EditArticlleStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: EditArticlleStateInterface, action: Action) {
  return editArticleReducer(state, action);
}
