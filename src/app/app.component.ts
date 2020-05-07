import { Component } from '@angular/core';
import { PhotosService } from './servicios/photos.service';
import { Photo } from './modelos/Photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  albumsId = [1, 2, 3];

  constructor( public photosService: PhotosService ){}

  
}