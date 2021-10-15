import { Pipe, PipeTransform } from '@angular/core';
import { IHero } from '../interfaces/IHeros';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(hero: IHero): string {
    let newImage;

    if (hero.id) {
      newImage = `assets/heroes/${hero.id}.jpg`;
    } else {
      newImage = 'assest/heroes/no-image.png';
    }
    return newImage;
  }

}
