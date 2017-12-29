import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WellcomePageComponent } from './components/wellcome-page/wellcome-page.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WellcomePageComponent,
    FooterPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
