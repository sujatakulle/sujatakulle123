import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: any, ...any: unknown[]): any {
    console.log(value)
    var result=value+"Devpunje"
    return result;
  }

}
