import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './components/botones/botones.component';
import { MediaComponent } from './components/media/media.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { OrganizacionInformacionComponent } from './components/organizacion-informacion/organizacion-informacion.component';
import { OrganizacionTextoComponent } from './components/organizacion-texto/organizacion-texto.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'botones', component: BotonesComponent },
  { path: 'media', component: MediaComponent },
  { path: 'carrusel', component: CarruselComponent },
  { path: 'mensajes', component: MensajesComponent },
  { path: 'orginfo', component: OrganizacionInformacionComponent },
  { path: 'orgtext', component: OrganizacionTextoComponent },
  { path: 'card', component: CardComponent },
  { path: '**', component: ErrorComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
