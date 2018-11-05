import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryFeedComponent } from './story-feed/story-feed.component';
import { StoryItemDetailComponent } from './story-item-detail/story-item-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'newstories', component: StoryFeedComponent, data: { feedType: 'newstories' } },
  { path: 'topstories', component: StoryFeedComponent, data: { feedType: 'topstories' } },
  { path: 'beststories', component: StoryFeedComponent, data: { feedType: 'beststories' } },
  { path: 'askstories', component: StoryFeedComponent, data: { feedType: 'askstories' } },
  { path: 'showstories', component: StoryFeedComponent, data: { feedType: 'showstories' } },
  { path: 'item/:itemId', component: StoryItemDetailComponent },
  { path: 'user/:userId', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryRoutingModule {}
