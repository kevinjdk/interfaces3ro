import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor() {}

  getImages(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const images: any[] = [
        { 
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
          alt: 'Es un Lago',
          title: 'Lago'
        },
        { 
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
          alt: 'Es una Ciudad',
          title: 'Ciudad'
        },
        { 
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg',
          alt: 'Son Rocas',
          title: 'Rocas'
        },
        { 
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria12.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria12.jpg',
          alt: 'Es una Ciudad urbana',
          title: 'Ciudad Urbana'
        },
        { 
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9.jpg',
          alt: 'Son palomas',
          title: 'Palomas'
        },
      ];
      resolve(images);
    });
  }
}
