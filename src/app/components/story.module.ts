import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryFeedComponent } from './story-feed/story-feed.component';
import { StoryItemComponent } from './story-item/story-item.component';
import { SharedModule } from '../shared/shared.module';
import { DomainPipe } from './domain.pipe';
import { TimeAgoPipe } from './time-ago.pipe';
import { StoryItemDetailComponent } from './story-item-detail/story-item-detail.component';
import { UserComponent } from './user/user.component';
import { StoryCommentsComponent } from './story-comments/story-comments.component';

@NgModule({
  imports: [CommonModule, StoryRoutingModule, SharedModule],
  declarations: [
    StoryFeedComponent,
    StoryItemComponent,
    StoryItemDetailComponent,
    UserComponent,
    DomainPipe,
    TimeAgoPipe,
    StoryCommentsComponent
  ]
})
export class StoryModule {}
