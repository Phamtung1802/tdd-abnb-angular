import { Pipe, PipeTransform } from '@angular/core';
import { AppProperty } from './object-interfaces/AppProperty';

@Pipe({
  name: 'checkAvailability'
})
export class CheckAvailabilityPipe implements PipeTransform {

  transform(objects: AppProperty[]): AppProperty[] {
    return objects.filter(object =>  object.status=="Available");
  }
}


