import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollar'
})
export class DollarPipe implements PipeTransform {

  transform(dollar: string): any {
    if(!dollar) {
      return dollar;
    } else {
        console.log(dollar)
        return dollar + '$';
    }
    
  }

}
