import { Component, OnInit,ViewChild, AfterViewInit, Input } from '@angular/core';
import { DeviceListComponent } from '../device-list/device-list.component';
import { Device } from '../device.model';
import { Router } from '@angular/router';
import { DeviceEditComponent } from '../device-edit/device-edit.component';
import { DeviceDetailComponent } from '../device-detail/device-detail.component';

import { DeviceService } from '../device.service';
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit,AfterViewInit {
  @ViewChild(DeviceListComponent) list;
  @ViewChild(DeviceEditComponent) edit;
  @ViewChild(DeviceDetailComponent) detail;
  device:Device;

  
  id:number
  
  constructor(private router:Router,private deviceService:DeviceService) { }

  ngOnInit() {
    this.id = 0;
    console.log(this.id);
    
  }

  message:string;

  ngAfterViewInit() {
   // this.device = this.child.device
   console.log(this.deviceService.deviceId);
  if(this.deviceService.deviceId==0) {
    this.router.navigate(['/devices',1])
    
  }
}

}
