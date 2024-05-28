import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//PrimeNg
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { BotonesComponent } from './botones/botones.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { MediaComponent } from './media/media.component';
import { OrganizacionInformacionComponent } from './organizacion-informacion/organizacion-informacion.component';
import { OrganizacionTextoComponent } from './organizacion-texto/organizacion-texto.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    MensajesComponent,
    MediaComponent,
    OrganizacionInformacionComponent,
    OrganizacionTextoComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SplitButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    BadgeModule,
    AvatarModule,
    RippleModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
