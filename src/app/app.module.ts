import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpHeaderComponent } from './sp-header/sp-header.component';
import { SpListComponent } from './sp-list/sp-list.component';
import { CommonModule } from '@angular/common';
import { SpFilterComponent } from './sp-filter/sp-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SpHeaderComponent,
    SpListComponent,
    SpFilterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
