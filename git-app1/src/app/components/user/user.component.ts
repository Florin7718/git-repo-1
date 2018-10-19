import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() loginId : string;
  @Input() name : string;
  @Input() password : string;
  @Input() creationDate : string;

  constructor() { }

  ngOnInit() {
  }

}
