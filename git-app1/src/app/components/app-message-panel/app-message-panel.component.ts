import { Component, OnInit } from '@angular/core';
import { AppMessageBusService } from '../../services/app-message-bus.service';
export { Alert };

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-app-message-panel',
  templateUrl: './app-message-panel.component.html',
  styleUrls: ['./app-message-panel.component.css']
})
export class AppMessagePanelComponent implements OnInit {

  private alerts: Alert[] = [];

  constructor(private msgBusServ: AppMessageBusService) { }

  ngOnInit() {
    this.msgBusServ.watchAlerts().subscribe(succ => {
      this.alerts.push(succ);
      console.log(succ);
    });
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}


