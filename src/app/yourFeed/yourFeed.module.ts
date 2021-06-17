import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BannerModule} from '../shared/modules/banner/banner.module';
import {FeedModule} from '../shared/modules/feed/feed.module';
import {FeedToglerModule} from '../shared/modules/feedToggler/feedTogler.module';
import {PopularTagsModule} from '../shared/modules/popularTags/popularTags.module';
import {YourFeedComponent} from './components/yourFeed/yourFeed.component';

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedToglerModule,
  ],
  declarations: [YourFeedComponent],
})
export class YourFeedModule {}
