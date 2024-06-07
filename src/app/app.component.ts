import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/home']
      },
      {
        label: 'Botones',
        icon: 'pi pi-th-large',
        routerLink: ['/botones']
      },
      {
        label: 'Media',
        icon: 'pi pi-video',
        items: [
          {
            label: 'Galeria',
            icon: 'pi pi-video',
            routerLink: ['/media']
          },
          {
            label: 'Carusel',
            icon: 'pi pi-images',
            routerLink: ['/carrusel']
          }
        ]
      },
      {
        label: 'Mensajes',
        icon: 'pi pi-envelope',
        routerLink: ['/mensajes']
      },
      {
        label: 'Organización de Información',
        icon: 'pi pi-sitemap',
        items: [
          {
            label: 'Card',
            icon: 'pi pi-id-card',
            routerLink: ['/card']
          }
        ]
      },
      {
        label: 'Organización de Texto',
        icon: 'pi pi-align-left',
        routerLink: ['/orgtext']
      }
    ];
  }
}