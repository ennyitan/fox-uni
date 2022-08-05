import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  getSlides(){
    return ([
      {
        bg_img: 'carousel-1',
        description : 'University College School Education',
        body : 'A small river name Duden flows by their place and supplies it with the neccessary regelialia'
      },
      {
        bg_img: 'carousel-2',
        description : 'Education Needs Complete Solutions',
        body : 'A small river name Duden flows by their place and supplies it with the neccessary regelialia'
      }
    ])
  }
}
