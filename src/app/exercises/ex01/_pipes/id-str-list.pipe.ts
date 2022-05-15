import { Pipe, PipeTransform } from '@angular/core';
import { AnimalModel } from "../_models/animal.model";

@Pipe({ name: 'idStrList' })
export class IdStrListPipe implements PipeTransform {

  transform(list: AnimalModel[] | null): string[] {
    return list?.map(animal => animal.id.toString()) ?? [];
  }
}
