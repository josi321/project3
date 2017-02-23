import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { ShopComponent } from './content/shop/shop.component';
import { JournalComponent } from './journal/journal.component';
import { AdventureComponent } from './adventure/adventure.component';

const routes: Routes = [
    {path: '', component: ContentComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'journal', component: JournalComponent},
    {path: 'adventure', component: AdventureComponent},

];

@NgModule ({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class RoutingModule {}
