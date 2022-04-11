import { Component, OnInit,enableProdMode } from '@angular/core';
import { Service, Employee, State } from './edit.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-row-edit',
  templateUrl: './row-edit.component.html',
  styleUrls: ['./row-edit.component.css'],
})
export class RowEditComponent {

  dataSource!: Employee[];

  states!: State[];

  events: Array<string> = [];
  
  constructor(service: Service) {
    this.dataSource = service.getEmployees();
    this.states = service.getStates();
  }


  logEvent(eventName: string) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }
}

 
