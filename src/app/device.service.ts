import { Injectable } from '@angular/core';
import {  Http,Response } from '@angular/http'
import { Device } from './device.model';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  
  devices:Device[];
  device:Device;
  config:any;
  devicesChanged =  new Subject<Device[]>();
  deviceChanged = new Subject<Device>();
  configChanged = new Subject<any>();
  deviceId: number;
  constructor(private http:Http) { 
    this.deviceId = 0;
  }

  getDevices():any {
    
    this.http.get("assets/devices.json").subscribe(
      (response: Response) => {
          this.devices = response.json()  
          this.devicesChanged.next(this.devices.slice())
          this.deviceId++;
          return this.devices;
      });   
  }

  getDevicesConfig():any {
    this.http.get("assets/config.json").subscribe(
      (response: Response) => {
          this.config = response.json()  
          this.configChanged.next(this.config)
          console.log(this.config);
          return this.config;
    });   
  }
  setDeviceConfig(i:number) {
    this.devices[i].lastConfigured = "12:29"
  }

  getDevice(id:number) {
    this.http.get("assets/devices.json").subscribe(
      (response: Response) => {
          this.devices = response.json()
          this.device = this.devices[id]
          this.deviceChanged.next(this.device)
          return this.device;
      });  
    
  }
}
