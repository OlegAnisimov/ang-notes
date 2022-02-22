import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {NotesComponent} from './notes/notes.component';
import {HttpClientModule} from "@angular/common/http";
import {NotesServiceService} from "./notes-service.service";

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    NotesServiceService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
