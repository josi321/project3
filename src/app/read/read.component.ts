// read component is like hero-detail component

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Journal } from '../journal/journal';
import { JournalService } from '../journal/journal.service';
import { JournalEntry } from '../new-entry/newEntry';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  journalPost: Journal;

  constructor(
    private journalService: JournalService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  // ngOnInit(): void {
  //   this.route.params
  //     .switchMap((params: Params) => this.heroService.getHero(+params['id']))
  //     .subscribe(hero => this.hero = hero);
  // }

 ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.journalService.getPost(+params['ID']))
        .subscribe(journal =>
          {

            this.journalPost = journal;
            console.log(this.journalPost);
            console.log(journal);
            console.log('hi');
          }
         );

}

  goBack(): void {
  this.location.back();
}

}
