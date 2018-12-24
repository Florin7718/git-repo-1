import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categ-creation',
  templateUrl: './categ-creation.component.html',
  styleUrls: ['./categ-creation.component.scss']
})
export class CategCreationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  name : string = "category name";

  @Input()
  weight : number = 10000;

  @Input()
  createdBy : string = "User1";

  @Input()
  createdDate : string = "17-dec-2018";

  saveCategory(){
    console.log("caling category save service!");
  }

}
