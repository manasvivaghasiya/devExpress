import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDataGridModule, DxPopupModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Service } from './row-edit/edit.service';
// import { PopupService } from './popup/popup.service';

import { RowEditComponent } from './row-edit/row-edit.component';
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup/popup.service';


@NgModule({
  declarations: [
    AppComponent,
    RowEditComponent,
    PopupComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxButtonModule,
    DxDataGridModule,
  ],
  providers: [Service,PopupService],
  bootstrap: [AppComponent],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);