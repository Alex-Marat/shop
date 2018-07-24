import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], fieldSort: string, sortAscFlag: boolean) {
    const ctx = this;

    return array.sort((a, b) => {
      return sortAscFlag ? ctx.sortByAsc(a, b, fieldSort) : ctx.sortByDesc(a, b, fieldSort);
    });
  }

  sortByAsc (a, b, field) {
    return a[field].toString().toLowerCase() > b[field].toString().toLowerCase() ? 1 : -1;
  }

  sortByDesc(a, b, field) {
    return  b[field].toString().toLowerCase() > a[field].toString().toLowerCase() ? 1 : -1;
  }
}
