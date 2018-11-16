import { Component, OnInit } from '@angular/core';
import { Position } from '../../models/position';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent implements OnInit {

  position: Position;
  nbre: number;
  options: Position[];
  cout: number;
  constructor() { this.position = new Position() }

  ngOnInit() {

    this.position = new Position();
    this.cout = 0;
    this.options = [{ name: "" }, { name: "haut" }, { name: "bas" }];
    this.nbre = 0;
  }

  calculer() {
    console.log("calculer");
    console.log(this.position);
    if (this.position.name == 'haut') {
      if (this.nbre <= 30) {
        this.cout = 10;
      } else {
        this.cout = 20;
      }
    }
    else if (this.position.name == 'bas') {
      if (this.nbre <= 30) {
        this.cout = 5;
      } else {
        this.cout = 15;
      }
    }
  }
}
