import{Component, OnInit, Input}from '@angular/core';

@Component({
  selector: 'app-purchased-item',
  templateUrl: './purchased-item.component.html',
  styleUrls: ['./purchased-item.component.css']
})
export class PurchasedItemComponent implements OnInit {

  @Input() name : string = 'Beer';
  @Input() price : string = '3.5';
  @Input() currency : string = 'RON';
  @Input() date : string = '28.09.2018';

  constructor() {}

  ngOnInit() {
  }

}
