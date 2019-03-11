import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-experimental-array',
  templateUrl: './experimental-array.component.html',
  styleUrls: ['./experimental-array.component.css']
})
export class ExperimentalArrayComponent implements OnInit {
  numberArray: Array<number> = [3, 3, 4, 3, 3];
  max: number;
  min: number;
  constructor() { }

  ngOnInit() {
  }
  sumMinAndMax(){
    this.max = this.numberArray.reduce((a, b) => Math.max(a, b));
    this.min = this.numberArray.reduce((a, b) => Math.min(a, b));
    alert(`Sum of max and min number in array is ${this.max + this.min}`)
  }
}
