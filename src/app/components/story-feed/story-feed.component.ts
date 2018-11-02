import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { switchMap, map } from 'rxjs/operators';
import { Observable, BehaviorSubject, forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-story-feed',
  templateUrl: './story-feed.component.html',
  styleUrls: ['./story-feed.component.scss']
})
export class StoryFeedComponent implements OnInit {
  feed$: Observable<number[]>;
  pages$: Observable<number>;
  items$: Observable<any[]>;
  currentPage$ = new BehaviorSubject(1);
  pageSize$ = new BehaviorSubject(12);
  test: any;

  constructor(private route: ActivatedRoute, private dataSvc: DataService) {}

  ngOnInit() {
    this.feed$ = this.route.data.pipe(switchMap(data => this.dataSvc.getFeed(data.feed)));
    this.pages$ = this.feed$.pipe(
      map(feeds => Math.floor(feeds.length / this.pageSize$.getValue()) + 1)
    );
    this.items$ = this.currentPage$.pipe(
      switchMap(page => {
        return this.feed$.pipe(
          map(items =>
            items.slice(
              (page - 1) * this.pageSize$.getValue(),
              (page - 1) * this.pageSize$.getValue() + this.pageSize$.getValue()
            )
          )
        );
      })
    );
  }

  prevPage() {
    this.currentPage$.next(this.currentPage$.value - 1);
  }

  nextPage() {
    this.currentPage$.next(this.currentPage$.value + 1);
  }
}
