import { Component, OnInit } from '@angular/core';
import { PurchasedItemsServiceService } from '../../services/purchased-items-service.service';
import { PurchasedItemComponent } from '../purchased-item/purchased-item.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor(private itemsService: PurchasedItemsServiceService) { }

  private isFinishedLoading = false;

  private lineChartData: Array<any> = [];

  private lineChartLabels: Array<any> = [];
  private lineChartOptions: any = {
    responsive: true
  };
  private lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  private lineChartLegend: boolean = true;
  private lineChartType: string = 'line';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
    this.itemsService.getItemsFromDB()
      .subscribe(s => {
        this.processItems1(s);
        this.isFinishedLoading = true;
      });
  }

  /**
   * Y axis : individual purchase value
   * X axis : date - purchase name
   * @param items
   */
  private processItems0(items: PurchasedItemComponent[]) {
    this.lineChartData = [];
    this.lineChartLabels = [];
    var series1Data = [];
    items.forEach(e => {
      series1Data.push(e.price);
      this.lineChartLabels.push(e.date + '_' + e.name);
    });
    var series1obj = {
      data: series1Data,
      label: 'item name + day of purchase'
    };

    this.lineChartData.push(series1obj);
  }

  /**
   * Y axis : totals for the day
   * X axis : 1-oct
   * @param items 
   */
  private processItems1(items: PurchasedItemComponent[]) {
    var mapTotalsByDay = new Map<string, number>();
    var mapDayLabels = new Map<string, string>();

    items.forEach(e => {
      if (mapTotalsByDay.get(e.date) != null) {
        var currentTotal: number = mapTotalsByDay.get(e.date);
        currentTotal = Number(currentTotal) + Number(e.price);
        mapTotalsByDay.set(e.date, currentTotal);
      } else {
        mapTotalsByDay.set(e.date, e.price);
      }
      mapDayLabels.set(e.date, 'value not relevant');
    });

    var lineData = [];
    var itValues = mapTotalsByDay.values();
    var nextVal = itValues.next();
    while (!nextVal.done) {
      lineData.push(nextVal.value);
      nextVal = itValues.next();
    }

    var series1obj = {
      data: lineData,
      label: 'Totals per day'
    };

    this.lineChartData.push(series1obj);

    var itKeys = mapDayLabels.keys();
    var nextKey = itKeys.next();
    while (!nextKey.done) {
      this.lineChartLabels.push(nextKey.value);
      nextKey = itKeys.next();
    }


  }

}