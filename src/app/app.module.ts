import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { LoginComponent } from './login/login.component';
import { AppRouting } from './app-routing.module';
import { DeviceService } from './device.service';
import { DeviceItemComponent } from './device-item/device-item.component';
import { DeviceEditFormComponent } from './device-edit-form/device-edit-form.component';
import { DeviceCompleteDetatilComponent } from './device-complete-detatil/device-complete-detatil.component';
import { TroubleshootComponent } from './troubleshoot/troubleshoot.component';


@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    DeviceListComponent,
    DeviceDetailComponent,
    DeviceEditComponent,
    LoginComponent,
    DeviceItemComponent,
    DeviceEditFormComponent,
    DeviceCompleteDetatilComponent,
    TroubleshootComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRouting,
    FormsModule
  
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
