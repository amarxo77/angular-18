import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ): string {
    if (inputType === 'cel' && outputType === 'fah') {
      return ((+value * 9) / 5 + 32).toFixed(2) + '°F';
    } else if (inputType === 'fah' && outputType === 'cel') {
      return (((+value - 32) * 5) / 9).toFixed(2) + '°C';
    } else {
      return `${
        typeof value === 'number'
          ? value.toFixed(2)
          : parseFloat(value).toFixed(2)
      } ${inputType === 'cel' ? '°C' : '°F'}`;
    }
  }
}
