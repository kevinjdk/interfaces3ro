import { Component } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {
  images: any[] = [];
  responsiveOptions: any[] = [];

  constructor(private photoService: PhotoService) { }
  
  ngOnInit(): void {
    this.photoService.getImages().then((images: any[]) => {
      this.images = images;
    });
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }
  onImageChange(event: any) {
    this.images = event;
  }
}


