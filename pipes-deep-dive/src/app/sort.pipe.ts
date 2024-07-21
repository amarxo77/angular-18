import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(
    value: number[] | string[],
    direction: 'asc' | 'desc' = 'asc'
  ): number[] | string[] {
    if (!value || !value?.length) return value;
    const isNumberArr = value.every((val) => typeof val === 'number');
    if (isNumberArr) {
      return value.sort((a, b) => (direction === 'asc' ? a - b : b - a));
    }
    return value.sort((a, b) =>
      direction === 'asc'
        ? a.toLowerCase().localeCompare(b.toLowerCase())
        : b.toLowerCase().localeCompare(a.toLowerCase())
    );
  }
}
