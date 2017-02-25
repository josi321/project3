import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Journal } from '../journal/journal';
import { JournalComponent } from '../journal/journal.component';
import { JournalService } from '../journal/journal.service';
import { JournalEntry } from './newEntry';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  public journals: JournalEntry[]; // let journals be the JournalEntry array
  public entry: JournalEntry;
  public params: string;
  journalEntries: Journal[] = [];
  selectedJournal: Journal;

  constructor() { }
  private journalService: JournalService;
  private location: Location;
  private router: Router;

  // model = new newEntry('', '', '');
  // showFormControls(form: any) {
  //     return form && form.controls['name'] &&
  //     form.controls['name'].value;
  // }

  ngOnInit() {
    // make the new entry be a new instance of JournalEntry
    this.entry = new JournalEntry();
  }

  SubmitJournal() {
    this.params = "[" + JSON.stringify(this.entry) + "]";
    // let parameters = JSON.stringify(("#apiForm").serializeArray());
    this.journalService.postEntry;
  }
}
