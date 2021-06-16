import {AuthStateInterface} from 'src/app/auth/types/authState.inerface';
import {FeedStateInterface} from '../modules/feed/types/feedState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
}
