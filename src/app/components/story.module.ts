import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryFeedComponent } from './story-feed/story-feed.component';
import { StoryItemComponent } from './story-item/story-item.component';
import { SharedModule } from '../shared/shared.module';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  imports: [CommonModule, StoryRoutingModule, SharedModule],
  declarations: [StoryFeedComponent, StoryItemComponent, TimeAgoPipe]
})
export class StoryModule {}
