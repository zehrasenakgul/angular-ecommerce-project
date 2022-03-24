import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})

//Kendi pipe sistemimizi projede bu şekilde kullanabiliriz
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string | null ): Product[] {
    //gelen veriyi küçük harfe çeviriyoruz.
    filterText = filterText ? filterText.toLocaleLowerCase() : null
    // filterText ? varsa anlamına gelir.
    return filterText ? value.filter((p: Product) => p.name
      .toLocaleLowerCase().indexOf(filterText!) !== -1) : value;
  }

}
