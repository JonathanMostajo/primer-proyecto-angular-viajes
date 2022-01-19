import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/Home';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public gallery: Gallery;
  constructor() {
    this.gallery = {
      title: 'Galeria de fotos',
      imageGallery: [
        {
          src: '../../../../../assets/images/gallery1.jpg',
          alt: 'Foto de un barco en un lago'
        },
        {
          src: '../../../../../assets/images/gallery2.jpg',
          alt: 'Foto moais'
        },
        {
          src: '../../../../../assets/images/gallery3.jpg',
          alt: 'Foto puesta de sol en una playa'
        },
        {
          src: '../../../../../assets/images/gallery4.jpg',
          alt: 'Foto lago en un valle'
        }
      ]
    }
   }
  
  ngOnInit(): void {
  }

}
