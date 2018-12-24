import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categ-rule-assig-management',
  templateUrl: './categ-rule-assig-management.component.html',
  styleUrls: ['./categ-rule-assig-management.component.scss']
})
export class CategRuleAssigManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public categories : string[] = ["category I", "category II", "category III"];
  public rules : string[] = ["rule1", "rule2", "rule3", "rule4", "rule5", "rule6"];

  saveAssignments(){
    console.log("saving all assignments!");
  }

}
