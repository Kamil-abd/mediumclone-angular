import {ArticleStateInterface} from 'src/app/article/types/articleState.interface';
import {AuthStateInterface} from 'src/app/auth/types/authState.inerface';
import {CreateArticleStateInterface} from 'src/app/createArticle/types/createArticleState.interface';
import {EditArticlleStateInterface} from 'src/app/editArticle/types/createArticleState.interface';
import {SettingsStateInterface} from 'src/app/settings/types/settingsState.interface';
import {FeedStateInterface} from '../modules/feed/types/feedState.interface';
import {PopularTagsStateInterface} from '../modules/popularTags/types/popularTagsState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticlleStateInterface;
  settings: SettingsStateInterface;
}
