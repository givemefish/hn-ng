import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryFeedComponent } from './story-feed/story-feed.component';

const routes: Routes = [
  { path: 'new', component: StoryFeedComponent, data: { feed: 'newstories' } },
  { path: 'top', component: StoryFeedComponent, data: { feed: 'topstories' } },
  { path: 'best', component: StoryFeedComponent, data: { feed: 'beststories' } },
  { path: 'ask', component: StoryFeedComponent, data: { feed: 'askstories' } },
  { path: 'show', component: StoryFeedComponent, data: { feed: 'showstories' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryRoutingModule {}
