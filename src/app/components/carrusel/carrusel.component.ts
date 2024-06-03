import { Component } from '@angular/core';
import { CarruselService } from '../../services/carrusel.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.scss'
})
export class CarruselComponent {
  products: any[] = [];
  responsiveOptions: any[] = [];

  constructor(private carruselService: CarruselService) { }

  ngOnInit(): void {
    this.carruselService.getProductsSmall().then((products: any) => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'OUTOFSTOCK':
        return 'danger';
      case 'LOWSTOCK':
        return 'warning';
      default:
        return 'info';
    }
  }
}
