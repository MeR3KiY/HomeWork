import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fruitFilter'
})
export class FruitFilterPipe implements PipeTransform {

  transform(elements: any[], filterText: string): any[] {
    if (!filterText) {
      return elements;
    }

    //Live search
    const filteredElements = elements.filter((element: { color: string, taste: string}) => {

      if (element.color.includes(filterText)) {
        return true;
      } else {
        return false;
      }
    });
    return filteredElements;
  }

}
