import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-story-item-detail',
  templateUrl: './story-item-detail.component.html',
  styleUrls: ['./story-item-detail.component.scss']
})
export class StoryItemDetailComponent implements OnInit, OnDestroy {
  public id: string;
  public score: number;
  public title: string;
  public by: string;
  public url: string;
  public time: number;
  public text: string;
  public kids: string[];
  public isFetching: boolean;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private dataSvc: DataService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.isFetching = true;
      this.dataSvc.getItem(params.itemId).subscribe(data => {
        Object.assign(this, data);
        this.isFetching = false;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
