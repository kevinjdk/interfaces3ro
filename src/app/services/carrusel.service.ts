import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  constructor() { }
  getProductsSmall(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const products: any[] = [
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Bamboo Watch',
          description: 'Product Description',
          image: 'bamboo-watch.jpg',
          price: 65,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
        },
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Black Watch',
          description: 'Product Description',
          image: 'black-watch.jpg',
          price: 65,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
        },
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Bracelete',
          description: 'Product Description',
          image: 'bracelet.jpg',
          price: 20,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
        },
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'T-shirt Blue',
          description: 'Product Description',
          image: 'blue-t-shirt.jpg',
          price: 35,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'LOWSTOCK',
          rating: 5
        },
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Bolso Marron',
          description: 'Product Description',
          image: 'brown-purse.jpg',
          price: 70,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'OUTOFSTOCK',
          rating: 5
        },
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'AirPods Amarrillos',
          description: 'Product Description',
          image: 'yellow-earbuds.jpg',
          price: 120,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'OUTOFSTOCK',
          rating: 5
        },
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'AirPods Azules',
          description: 'Product Description',
          image: 'green-earbuds.jpg',
          price: 120,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'OUTOFSTOCK',
          rating: 5
        },
      ];
      resolve(products);
    });
  }
}
