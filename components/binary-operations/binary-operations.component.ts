import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-operations',
  templateUrl: './binary-operations.component.html',
  styleUrls: ['./binary-operations.component.css']
})
export class BinaryOperationsComponent implements OnInit {
  a: number = 0;
  b: number = 0;

  constructor() { }

  ngOnInit() {
  }
  sumOnClick() {
    alert(this.a + this.b);
  }
  deriveOnClick(){
    alert(this.a - this.b);
  }
  muliplyOnClick(){
    alert(this.a * this.b);
  }
  divideOnClick(){
    alert(this.a / this.b);
  }
}
