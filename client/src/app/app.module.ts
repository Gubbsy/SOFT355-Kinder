import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteCatComponent } from './views/vote-cat/vote-cat.component';
import { TopCatComponent } from './views/top-cat/top-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteCatComponent,
    TopCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
