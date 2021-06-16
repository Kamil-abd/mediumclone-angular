import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {PopularTagsService} from './services/popularTags.service';
import {GetPopularTagsEffect} from './store/effects/getPopularTags.effect';
import { reducers } from './store/reducers';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { RouterModule } from '@angular/router';
import { LoadingModule } from '../loading/loading.module';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    RouterModule,
    LoadingModule,
    ErrorMessageModule
  ],
  declarations: [
    PopularTagsComponent
  ],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
