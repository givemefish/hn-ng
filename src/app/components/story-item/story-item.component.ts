import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss']
})
export class StoryItemComponent implements OnInit {
  @Input()
  itemId: number;

  item$: Observable<any>;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.item$ = this.dataSvc.getItem(this.itemId);
  }
}
