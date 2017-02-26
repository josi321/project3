import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// model data
import { Journal } from './journal';
import { JournalEntry } from '../new-entry/newEntry';

@Injectable()
export class JournalService {

  // last resort, not really configurable.
  // private theURL = `http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/?params=%5B%7B%22name%22:%22posts_per_page%22,%22value%22:%225%22%7D,%7B%22name%22:%22paged%22,%22value%22:%221%22%7D%5D`;

  /* backup URL to use below */
  // private journalUrl = 'http://localhost:4200/sample-journal-data.json';

  private baseAPIKey = `94a08da1fecbb6e8b46990538c7b50b2`;
  private baseJournalUrl = `http://portal.helloitscody.com/inhabitent/api/get/${this.baseAPIKey}/?`;
  private baseJournalParams = `params=[{"name":"posts_per_page","value":"5"},{"name":"paged","value":"1"}]`;

  private journalUrl = this.baseJournalUrl + encodeURI(this.baseJournalParams);

  private JournalArr: Journal[] = <Journal[]>[];

  private postJournalUrl = `http://portal.helloitscody.com/inhabitent/api/post/${this.baseAPIKey}/?`;


  private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

  entries: JournalEntry[] = <JournalEntry[]>[];
  postURL: string;

	private journalPostUrl = this.postJournalUrl;

  constructor(private http: Http) {
    console.log("creating journal service");
  };

  getJournals(): Promise<Journal[]> {
    return this.http.get(this.journalUrl).toPromise()
      .then(response => {
        let returnedResponse = response.json();

        console.log("***** in journal.service.ts *****");
        let compareKeys = (a, b) => {
          let aKeys = Object.keys(a).sort();
          let bKeys = Object.keys(b).sort();
          return JSON.stringify(aKeys).toLowerCase() === JSON.stringify(bKeys).toLowerCase();
        };

        // new instance of Journal called keyToCompare
        let keyToCompare = new Journal();
        console.log(keyToCompare);
        for (let prop in returnedResponse) {
          let currentObject: Journal = <Journal>returnedResponse[prop];
          // console.log(currentObject);
          // console.log( compareKeys(currentObject, keyToCompare) );
          if (compareKeys(currentObject, keyToCompare)) {
            this.JournalArr.push(currentObject);
          }
        }

        // console.log(this.JournalArr);
        // console.log(response.json() as Journal[]);

        console.log("***** in journal.service.ts *****");
        // return response.json();
        return this.JournalArr;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  //new journal entry
  postEntry(params: string): Promise<Journal> {
    this.postURL = this.journalPostUrl + "params=" + params;
    console.log(this.postURL);

    return this.http
      .post(this.postURL, params, { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  //selected journal entry

//   getHero(id: number): Promise<Hero> {
//   return this.getHeroes()
//              .then(heroes => heroes.find(hero => hero.id === id));
// }

  getPost(ID: number): Promise<Journal> {
console.log('getting the id');
    return this.http.get(this.journalUrl)
      .toPromise()
      .then(response => {
        let journals = response.json();
        for (let journal in journals) {

          if (journals[journal].ID === ID) {
            console.log(journals[journal].ID);
            return journals[journal] as Journal;
          } else { }
        }
      })
      .catch(this.handleError);
  }



}
