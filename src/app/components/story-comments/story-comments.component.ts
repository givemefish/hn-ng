import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-story-comments',
  templateUrl: './story-comments.component.html',
  styleUrls: ['./story-comments.component.scss']
})
export class StoryCommentsComponent implements OnInit {
  @Input()
  id: number;

  @Input()
  level: number;

  public text: string;
  public by: string;
  public kids: string[];
  public time: number;
  public hasCommentTree: boolean;
  public isActivated: boolean;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.hasCommentTree = false;
    this.isActivated = false;
    this.dataSvc.getItem(this.id).subscribe(
      data => {
        Object.assign(this, data);
        this.hasCommentTree = true;
      },
      error => console.log(error)
    );
  }

  toggleActivate() {
    this.isActivated = !this.isActivated;
  }
}
