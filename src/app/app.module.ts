import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, TooltipModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
