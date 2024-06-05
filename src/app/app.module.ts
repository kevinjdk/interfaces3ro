import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { BotonesComponent } from './components/botones/botones.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { MediaComponent } from './components/media/media.component';
import { OrganizacionInformacionComponent } from './components/organizacion-informacion/organizacion-informacion.component';
import { OrganizacionTextoComponent } from './components/organizacion-texto/organizacion-texto.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
// Services
import { MessageIService } from './services/message-i.service';
import { PhotoService } from './services/photo.service';
import { CarruselService } from './services/carrusel.service';
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
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    MensajesComponent,
    MediaComponent,
    OrganizacionInformacionComponent,
    OrganizacionTextoComponent,
    HomeComponent,
    ErrorComponent,
    CarruselComponent
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
    RippleModule,
    ImageModule,
    GalleriaModule,
    CarouselModule,
    TagModule,
    MessagesModule

  ],
  providers: [MessageService,MessageIService,PhotoService,CarruselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
