import {Component, Input, OnInit} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'mc-feed-togler',
  templateUrl: './feed-togler.component.html',
  styleUrls: ['./feed-togler.component.scss'],
})
export class FeedToglerComponent implements OnInit {
  @Input('tagName') tagNameProps: string | null;

  isLoggedIn$: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValue()
  }

  initializeValue() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
