import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewspaperToolbarComponent } from './components/newspaper-toolbar/newspaper-toolbar.component';
import { NewspaperListComponent } from './components/newspaper-list/newspaper-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewspaperToolbarComponent,
    NewspaperListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
