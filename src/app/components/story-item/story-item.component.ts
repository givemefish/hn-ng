import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss']
})
export class StoryItemComponent implements OnInit {
  @Input()
  index: number;

  @Input()
  id: number;

  @Input()
  title: string;

  @Input()
  by: string;

  @Input()
  url: string;

  @Input()
  score: number;

  @Input()
  time: number;

  @Input()
  commentsCount: number;

  constructor() {}

  ngOnInit() {}
}
