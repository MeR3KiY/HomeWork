import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(elements: any[], filterEmpL: string): any[] {
    if(!filterEmpL) {
      return elements;
    }

    //Live search
    const filteredEmpls = elements.filter((element: {name: string, surname: string, tel: string}) =>{

      if(element.name.includes(filterEmpL) || element.surname.includes(filterEmpL) || element.tel.includes(filterEmpL)) {
        return true;
      } else {
        return false;
      }
    });
    return filteredEmpls;
  }

}
