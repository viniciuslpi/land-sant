import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MenuComponent } from './home/menu/menu.component';
import { ProgramacaoComponent } from './home/programacao/programacao.component';
import { ContatoComponent } from './home/contato/contato.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { APP_BASE_HREF } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ProgramacaoComponent,
    ContatoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/primeiro-encontro-de-consagracao-a-nossa-senhora' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
