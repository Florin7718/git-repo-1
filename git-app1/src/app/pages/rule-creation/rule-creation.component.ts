import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rule-creation',
  templateUrl: './rule-creation.component.html',
  styleUrls: ['./rule-creation.component.scss']
})
export class RuleCreationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  name : string = "rule name";

  @Input()
  formula : string = "contains 'abc'";

  @Input()
  weight : number = 100;

  @Input()
  createdBy : string = "User1";

  @Input()
  createdDate : string = "17-dec-2018";

  saveRule(){
    console.log("caling rule save service!");
  }

}
