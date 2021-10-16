import { Pipe, PipeTransform } from '@angular/core';
import { IHero } from '../interfaces/IHeros';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(hero: IHero): string {
    let newImage;

    if (!hero.id && !hero.alt_img) {
      newImage = 'assets/no-image.png';
    } else if (hero.alt_img) {
      newImage = hero.alt_img;
    } else {
      newImage = `assets/heroes/${hero.id}.jpg`;
    }
    return newImage;
  }
}
