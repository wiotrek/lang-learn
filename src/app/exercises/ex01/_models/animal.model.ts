import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { AnimalNameModel } from "./animal-name.model";

export interface AnimalModel {
  id: number;
  animal: string;
  nameDisplay: string;
  icon: IconDefinition;
  color: string;
  dropAnimal: AnimalNameModel;
}
