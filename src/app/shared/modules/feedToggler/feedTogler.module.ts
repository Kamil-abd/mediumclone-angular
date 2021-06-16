import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedToglerComponent } from './components/feed-togler/feed-togler.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FeedToglerComponent
  ],
  exports:[FeedToglerComponent]
})
export class FeedToglerModule {}
