import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMiles',
})
export class ConvertMilesPipe implements PipeTransform {
  transform(value: number, targetUnits: string): number {
    let result: number = 0;

    if (!value) {
      return result;
    }

    switch (targetUnits) {
      case 'km':
        result = value * 1.60934;
        break;
      case 'm':
        result = value * 1.60934 * 1000;
        break;
      case 'cm':
        result = value * 1.60934 * 1000 * 100;
        break;
      default:
        throw new Error('Target unit not supported');
    }

    return result;
  }
}
