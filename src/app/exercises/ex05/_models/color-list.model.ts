import { WorkingListModel } from 'src/app/shared/models/working-list.model';

export interface ColorListModel extends WorkingListModel {
  hex: string;
  value: string;
}
