import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FeedToglerComponent} from './components/feed-togler/feed-togler.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeedToglerComponent],
  exports: [FeedToglerComponent],
})
export class FeedToglerModule {}
