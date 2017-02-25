import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ShopComponent } from './content/shop/shop.component';
import { RoutingModule } from './routing.module';
import { JournalComponent } from './journal/journal.component';
import { Journal } from './journal/journal';
import { JournalService } from './journal/journal.service';
import { AdventureComponent } from './adventure/adventure.component';
import { NewEntryComponent } from './new-entry/new-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    FooterComponent,
    ContentComponent,
    ShopComponent,
    JournalComponent,
    AdventureComponent,
    NewEntryComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
