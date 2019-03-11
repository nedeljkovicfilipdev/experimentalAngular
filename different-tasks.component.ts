import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-different-tasks',
  templateUrl: './different-tasks.component.html',
  styleUrls: ['./different-tasks.component.css']
})
export class DifferentTasksComponent implements OnInit {
  numberArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  summables: number = 0;
  average: number = 0;
  max: number = 0;
  min: number = 0;
  sqrting: number = 0;
  arrayLength: number = this.numberArray.length;

  constructor() { }

  ngOnInit() {
    this.summables = this.numberArray.reduce((a, b) => a + b);
  }
  sumOnClick() {
    alert(`Sum of array of numbers is: ${this.summables}`);
  }
  averageOnClick(){
    this.average = this.summables / this.arrayLength;
    alert(`Average of array of numbers is: ${this.average}`);
  }
  sqrtOnClick(){
    this.sqrting = Math.sqrt(this.summables);
    alert(`Sqrt of sum of array of numbers is: ${this.sqrting}`);
  }
  sumMinMaxOnClick(){
    this.max = this.numberArray.reduce((a, b) => Math.max(a, b));
    this.min = this.numberArray.reduce((a, b) => Math.min(a, b));
    alert(`Sum between Min and Max of array of numbers is: ${this.max + this.min}`);
  }
}
