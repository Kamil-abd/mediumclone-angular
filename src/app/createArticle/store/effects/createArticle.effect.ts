import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {ArticleInterface} from 'src/app/shared/types/articles.interface';

import {CreateArticleService} from '../../services/createArticle.service';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from '../actions/createArticle.action';

@Injectable()
export class CreateArticleEffect {
  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({articleInput}) => {
        return this.createArticleService.createArticle(articleInput).pipe(
          map((article: ArticleInterface) => {
            return createArticleSuccessAction({article});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createArticleFailureAction({errors: errorResponse.error.errors})
            );
          })
        );
      })
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({article}) => {
          console.log('success');
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router
  ) {}
}
