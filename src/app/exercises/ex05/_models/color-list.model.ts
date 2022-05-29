import { WorkingElementModel } from 'src/app/shared/models/working-element.model';

export interface ColorListModel extends WorkingElementModel {
  hex: string;
  value: string;
}
