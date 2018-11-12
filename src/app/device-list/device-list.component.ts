import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { DeviceService } from '../device.service';
import { Device } from '../device.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit,OnDestroy,OnChanges {

  constructor(private deviceService:DeviceService,private route:ActivatedRoute, 
     private router:Router) { }
  devices:Device[]
  subscription:Subscription
  loaded=false;

    ngOnInit() {
      this.devices = this.deviceService.getDevices()
    
      this.subscription = this.deviceService.devicesChanged.subscribe((devices:Device[])=>{
        this.devices = devices;
        console.log(this.devices);
        this.loaded = true;
       // this.router.navigate(['/devices',1]);

      //  
      });
    }

    ngOnChanges() {
      if(this.loaded == true) {
        this.router.navigate(['/devices',1]);
      }

    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
 

}
