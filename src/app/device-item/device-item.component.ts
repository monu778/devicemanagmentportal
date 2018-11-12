import { Component, OnInit,Input } from '@angular/core';
import { Device} from '../device.model';
import {DeviceService} from '../device.service'

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.css']
})
export class DeviceItemComponent implements OnInit {

  @Input() device:Device;
  // @Output() recipeSelected = new EventEmitter<void>()
   @Input() index:number
  
   constructor(private deviceService:DeviceService) { }
 
   ngOnInit() { }

}
