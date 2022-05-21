import { Component } from '@angular/core';
import { AnimalIconsArray } from "./_arrays/animal-icons.array";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { AnimalModel } from "./_models/animal.model";
import { AnimalNameModel } from "./_models/animal-name.model";
import {SummaryBtnType} from "../../shared/components/summary/_types/summary-btn.type";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.scss']
})
export class Ex01Component {

  // show which names are correct compare
  isCheck = false;

  // list of animal object with nested object
  listOfAnimalObj: AnimalModel[];

  // simple list with id and names
  // to compare drag with place
  listOfNames: AnimalNameModel[];

  // on the summary show how many animals is correct
  result = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    // assign mapping list only with id and display txt
    this.listOfNames = this.clearListOfAnimalNameList();

    // get main list from another file
    this.listOfAnimalObj = [...AnimalIconsArray];
  }

  check(): void {

    // show which elements are correct compare
    this.isCheck = !this.isCheck;

    this.result = this.listOfAnimalObj.reduce(
      (acc: number, curr: AnimalModel) =>
        acc + (curr.id === curr.dropAnimal.id ? 1 : 0), 0
    );
  }

  drop(event: CdkDragDrop<any, any>): void {

    // find correct element in list of names
    const droppingElement = this.listOfNames
      .find(el => el.id === +event.item.element.nativeElement.id);

    // find correct element in main animal list with nest object
    const dropContainer = this.listOfAnimalObj
      .find(animal => animal.id === +event.container.id);

    if (droppingElement && dropContainer) {

      // if some elements exist in this container then end func
      if (dropContainer.dropAnimal.id > 0) {
        return;
      }

      // assign { id, displayTxt } to const object
      dropContainer.dropAnimal = {
        id: droppingElement.id,
        txt: droppingElement.txt
      };

      // remove element from list of names
      this.listOfNames.splice(
        this.listOfNames.indexOf(droppingElement), 1
      );

      // assign { id, displayTxt } to nesting element in main list
      this.listOfAnimalObj[this.listOfAnimalObj.indexOf(dropContainer)] = dropContainer;
    }
  }

  summaryEvents(btn: SummaryBtnType): void {
    switch (btn) {
      case "check":
        this.check();
        break;
      case "reset":
        this.reset();
        break;
      case "next":
        this.router.navigate(['ex-02'], {
            relativeTo: this.activatedRoute.parent
          }
        ).then();
    }
  }

  // clear both list to start position and summary
  reset(): void {

    // recover started list
    this.listOfNames = this.clearListOfAnimalNameList();


    // clear list to start position
    this.listOfAnimalObj.map(animal => {

      // set default object to nest object
      animal.dropAnimal = {
        id: -1,
        txt: ''
      };

      return animal;
    });

    this.result = 0;
    this.isCheck = false;
  }

  // mapping main animal list to get only id and display txt
  private clearListOfAnimalNameList(): AnimalNameModel[] {
    return AnimalIconsArray
      .map((animal: AnimalModel) => {
        return {
          id: animal.id,
          txt: animal.nameDisplay
        } as AnimalNameModel;
      })
      // simple shuffle
      .sort((a: AnimalNameModel, b: AnimalNameModel) =>
        0.5 - Math.random());
  }
}
