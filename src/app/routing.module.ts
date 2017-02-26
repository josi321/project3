import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { ShopComponent } from './content/shop/shop.component';
import { JournalComponent } from './journal/journal.component';
import { AdventureComponent } from './adventure/adventure.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'adventure', component: AdventureComponent },
  { path: 'new-entry', component: NewEntryComponent },
  { path: 'read/:ID', component: ReadComponent }
  // :ID bc the router will carry on matching by taking what is left in the URL and the matched route’s children.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
