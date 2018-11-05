import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { switchMap, map, flatMap, tap } from 'rxjs/operators';
import { from, Subscription } from 'rxjs';

@Component({
  selector: 'app-story-feed',
  templateUrl: './story-feed.component.html',
  styleUrls: ['./story-feed.component.scss']
})
export class StoryFeedComponent implements OnInit, OnDestroy {
  public isFetching: boolean;
  public showPagination: boolean;
  public feedType: string;
  public feed: any[];
  public page: number;
  public pageSize: number;
  public totalPages: number;
  private subscription: Subscription;

  constructor(
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private dataSvc: DataService
  ) {}

  ngOnInit() {
    this.isFetching = false;
    this.showPagination = false;
    this.pageSize = 10;
    this.feedType = this.route.snapshot.data.feedType;
    this.subscription = this.route.queryParams
      .pipe(
        switchMap(params => {
          this.isFetching = true;
          this.feed = [];
          this.page = +params.p || 1;
          return this.dataSvc
            .getFeed(this.feedType)
            .pipe(tap(data => (this.totalPages = Math.ceil(data.length / 30))))
            .pipe(
              map(data =>
                data.slice(
                  (this.page - 1) * this.pageSize,
                  (this.page - 1) * this.pageSize + this.pageSize
                )
              )
            )
            .pipe(flatMap(data => from(data)))
            .pipe(flatMap(data => this.dataSvc.getItem(data)));
        })
      )
      .subscribe(
        data => {
          this.feed.push(data);
          this.isFetching = false;
          this.showPagination = true;
          this.cdRef.detectChanges();
        },
        error => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  prevPage() {
    this.router.navigate([`/stories/${this.feedType}`], {
      queryParams: {
        p: Math.max(1, this.page - 1)
      }
    });
  }

  nextPage() {
    this.router.navigate([`/stories/${this.feedType}`], {
      queryParams: {
        p: Math.min(this.totalPages, this.page + 1)
      }
    });
  }
}
