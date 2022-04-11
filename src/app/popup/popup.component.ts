import { Component, enableProdMode, OnInit } from '@angular/core';
import { PopupService, Employee, State } from './popup.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent  {


  dataSource: Employee[];

  states: State[];

  constructor(service: PopupService) {
    this.dataSource = service.getEmployees();
    this.states = service.getStates();
  }


  ngOnInit(): void {
  }

}
