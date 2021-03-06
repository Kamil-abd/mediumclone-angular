import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BannerModule} from '../shared/modules/banner/banner.module';
import {FeedModule} from '../shared/modules/feed/feed.module';
import { FeedToglerModule } from '../shared/modules/feedToggler/feedTogler.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';
import {GlobalFeedComponent} from './components/globalFeed/globalFeed.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedToglerModule
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
