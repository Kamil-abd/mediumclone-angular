import {ArticleInterface} from 'src/app/shared/types/articles.interface';
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';

export interface EditArticlleStateInterface {
  isLoading: boolean;
  article: ArticleInterface | null;
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
