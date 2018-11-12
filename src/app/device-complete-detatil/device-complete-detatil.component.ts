import { Component, OnInit,Input } from '@angular/core';
import { Device } from '../device.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-complete-detatil',
  templateUrl: './device-complete-detatil.component.html',
  styleUrls: ['./device-complete-detatil.component.css']
})
export class DeviceCompleteDetatilComponent implements OnInit {
  @Input()
  device:Device
  @Input()
  id:number
  
  lines:object[];

  
  constructor(private router:Router) { }

  goEditForm() {
    console.log(this.id);
    this.router.navigate(['/deviceEdit',this.id])
  }

  redirectTrouble() {
    this.router.navigate(['/troubleshoot',this.device.userName])    
  }

  ngOnInit() {
    console.log(this.id);

    this.lines=[
      {
        "line":"L2",
        "select":"Speed Dial",
        "phone":"301.663.5381",
        "label":"Julie"
      },   
      {
        "line":"L3",
        "select":"Speed Dial",
        "phone":"301.663.5381",
        "label":"Julie"
      },
      {
        "line":"L4",
        "select":"Speed Dial",
        "phone":"301.663.5381",
        "label":"MAthew"
      },
      {
        "line":"L5",
        "select":"Busy Bump",
        "phone":"Linda",
        "label":"Linda"
      },
      {        
        "line":"L6",
        "select":"Disabled",
        "phone":"",
        "label":""        
      },
      {        
        "line":"L7",
        "select":"Disabled",
        "phone":"",
        "label":""        
      },
      {        
        "line":"L8",
        "select":"Disabled",
        "phone":"",
        "label":""        
      },
      {        
        "line":"L9",
        "select":"Speed Dial",
        "phone":"098.998.0909",
        "label":"Adam"        
      },
      {        
        "line":"L10",
        "select":"Function",
        "phone":"Directory",
        "label":"Directory"        
      },
      {
        "line":"L11",
        "select":"Speed Dial",
        "phone":"098.998.0909",
        "label":"Adam" 
      },
      {
        "line":"L12",
        "select":"Function",
        "phone":"Directory",
        "label":"Directory" 
      }
    ]
  }

  getngClass(i:number) {
    const isValid = i<=8;
    if(i<=8) {
      return {"circle-badge-blue":true};
    } else if(i>=8) {
      return {"circle-badge-blue":true};
    }
  }

  

}
