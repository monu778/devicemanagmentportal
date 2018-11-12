import { Component, OnInit,OnDestroy } from '@angular/core';
import { DeviceService } from '../device.service';
import { Device } from '../device.model'
import { Subscription } from 'rxjs';
import { ActivatedRoute,Params, Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit, OnDestroy {
  device:Device;
  id:number;
  config:any;
  subscription:Subscription;
  devices:Device[];
  loaded=false;

  constructor( private deviceService:DeviceService,
    private route:ActivatedRoute,private router:Router,
    private location:Location) { }

  ngOnInit() {
   
    this.route.params.subscribe((params:Params) => {
    this.id = +params['id'];
    //this.device = this.deviceService.getDevice(this.id);
      this.devices = this.deviceService.getDevices();
        this.subscription= this.deviceService.devicesChanged.subscribe((device:Device[])=>{
        this.device = device[this.id];
        this.loaded = true;
      });
    });
   
  }

  onPublish() {
    console.log(this.id);
    this.deviceService.setDeviceConfig(this.id);
    this.router.navigate(['/devices',this.id]);
  }
  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
