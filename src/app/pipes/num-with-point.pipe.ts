import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numWithPoint'
})
export class NumWithPointPipe implements PipeTransform {

  transform(num: number): string {
    let newNum = String(num);

    if ( num < 100000 ){
      newNum = newNum[0]+newNum[1]+'.'+newNum[2]+newNum[3]+newNum[4]
    }else 
    if ( num == 100000 ){
      newNum = newNum[0]+newNum[1]+newNum[2]+'.'+newNum[3]+newNum[4]+newNum[5]
    }

    return newNum;
  }

}
