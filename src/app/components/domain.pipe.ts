import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domain'
})
export class DomainPipe implements PipeTransform {
  transform(value: any): string {
    const url = new URL(value);
    return url ? url.host : '';
  }
}
