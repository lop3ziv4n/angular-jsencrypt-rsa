import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DecryptComponent} from './components/decrypt/decrypt.component';
import {EncryptComponent} from './components/encrypt/encrypt.component';


@NgModule({
  declarations: [
    AppComponent,
    DecryptComponent,
    EncryptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
