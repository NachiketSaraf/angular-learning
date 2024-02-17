import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  foodComment="";
  foodName="";

  showData(foodInput : any ,foodComments : any){
    this.foodName = foodInput.value;
    this.foodComment = foodComments.value;
  }

}
