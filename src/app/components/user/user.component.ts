import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

export class UserData {
  id: string;
  created: number;
  karma: number;
  about: string;

  constructor(id: string, created: number, karma: number, about: string) {
    this.id = id;
    this.created = created;
    this.karma = karma;
    this.about = about;
  }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit, OnDestroy {
  public userData: UserData;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private dataSvc: DataService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.dataSvc.getUser(params.userId).subscribe(
        data => {
          this.userData = new UserData(data.id, data.created, data.karma, data.about);
        },
        error => console.log(error)
      );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
