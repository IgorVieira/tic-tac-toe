import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TicTacToeModule } from './tic-tac-toe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular2-toaster';
import { HeroComponent } from './hero/hero.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TicTacToeModule,
    BrowserAnimationsModule,
    NgxSmartModalModule.forRoot(),
    ToasterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
