import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VibeTypeComponent } from './vibe-type/vibe-type.component';
import { VibeIndicationComponent } from './vibe-indication/vibe-indication.component';


@NgModule({
  declarations: [
    AppComponent,
    VibeTypeComponent,
    VibeIndicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
