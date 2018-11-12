import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { DeviceService } from '../device.service';
import { ActivatedRoute,Params,Router,Route } from '@angular/router';
import { Device } from '../device.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit,OnChanges,OnDestroy {
  id:number;
  device:Device;
  devices:Device[];
  subscription:Subscription;
  loaded  = false;

  
  constructor(private deviceService:DeviceService,private route:ActivatedRoute,private router:Router) {



   }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id']; 
      this.devices = this.deviceService.getDevices();
      this.subscription= this.deviceService.devicesChanged.subscribe((device:Device[])=>{
      this.device = device[this.id];
      this.loaded= true;
     
    });
     
    });
    
  }
  ngOnChanges() {

    
  }

  onEdit() {
    this.router.navigate(['/', "deviceEdit",this.id])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  

}
