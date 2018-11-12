import { Component, OnInit,Input,ViewChild,ElementRef,ViewChildren,QueryList} from '@angular/core';
import {Device} from '../device.model';
import {Subscription} from 'rxjs'
import { DeviceService } from '../device.service';
import { Form, NgForm } from '@angular/forms';
import * as _ from "lodash";



@Component({
  selector: 'app-device-edit-form',
  templateUrl: './device-edit-form.component.html',
  styleUrls: ['./device-edit-form.component.css']
})
export class DeviceEditFormComponent implements OnInit {
  @Input()
  device:Device;

  configKeys:string[];
  config:any;
  subscription:Subscription;
  linelength:number;
  linearray=[];
  editEnable1 = false;
  editEnable2 = false;
  circleColor = "circle-badge-noclick"
  editText1:string;
  editText2:string;
  l:number;
  value:string;
  devices:Device[];
 

  @ViewChildren('ringerValue1') ringerValue1:QueryList<ElementRef>;
  @ViewChildren('ringerValue2') ringerValue2:QueryList<ElementRef>;
  @ViewChildren('linevalue1') lineValue1:QueryList<ElementRef>;
  @ViewChildren('linevalue2') lineValue2:QueryList<ElementRef>;

  @ViewChild('f1') form1:NgForm
  //@ViewChild('select2') select2:ElementRef;

  @ViewChildren('select2') select2:QueryList<ElementRef>;;

  ringText1:string;
  ringText2:string;

  @ViewChildren('d') d:QueryList<ElementRef>;

  selectStr:string;
  constructor(private deviceService:DeviceService) { }

  ngOnInit() {
    this.l = 0;
    this.value = "";
    this.selectStr = `<select style="border:0px" ngModel>
                          
    <option value="dir" select>Direcotory</option>
    <option value="callRet">CallReturn</option>
    <option value="Call Park">Call Park</option>
    <option value="Call Forward">Call Forward</option>
    <option value="DND">DND</option>
    <option value="Call Transfer">Call Transfer</option>
    </select>`
    
    this.editText1 = "Edit";
    this.editText2 = "Edit";
    this.ringText1 = "Ringer Tone 4";
    this.ringText2 = "Ringer Tone 3";
    this.config = this.deviceService.getDevicesConfig();

    
      
    this.subscription = this.deviceService.configChanged.subscribe((configs)=>{
      this.config = configs;
      this.linelength=configs[this.device.modelName].max_lines;
      for(let i=3;i<=this.linelength;i++) {
        this.linearray.push(i);
      }
      //this.linearray = new Array(this.linelength);
      console.log(this.linearray)
      
    });
  }


  changeColor() { }

  onChangeFunc(qw,lineno) {

    if(qw=="function") {
      if(lineno==9) {
        this.d.toArray()[0].nativeElement.innerHTML = this.selectStr;
        
      } else if(lineno==10) {

        this.d.toArray()[1].nativeElement.innerHTML = this.selectStr;
        
      } else if(lineno ==11) {
        this.d.toArray()[2].nativeElement.innerHTML = this.selectStr;
      } else if(lineno ==12) {
        this.d.toArray()[3].nativeElement.innerHTML = this.selectStr;
        
      }
    } else {

      if(lineno ==9) {
        this.d.toArray()[0].nativeElement.innerHTML =
        `<input type="tel" class="i2" style="border:0px;border-bottom:1px solid;border-color:#B8D32A"  ngModel name="name1"/>`
      } else if(lineno ==10) {
        this.d.toArray()[1].nativeElement.innerHTML =
        `<input type="tel" class="i2" style="border:0px;border-bottom:1px solid;border-color:#B8D32A" ngModel name="name1"/>`
        
      } else if(lineno ==11) {
        this.d.toArray()[2].nativeElement.innerHTML =
       `<input type="tel" class="i2"  style="border:0px;border-bottom:1px solid;border-color:#B8D32A" ngModel name="name1"/>`
      } else if(lineno ==12) {
        this.d.toArray()[3].nativeElement.innerHTML =
        `<input type="tel" class="i2"  style="border:0px;border-bottom:1px solid;border-color:#B8D32A" ngModel name="name1"/>`
      }


    }
    
    
  }

  
  onRingerChange(v1:number,v2:number,span:HTMLSpanElement) {
   
      if(v1==1) {
        
        if(this.ringerValue1.toArray()[v2].nativeElement.className == 'editRinger' ) {
            span.setAttribute('class','editRingerFill');
            this.ringText1 = span.innerText;
        }
        for(let i in this.ringerValue1.toArray()) {
          if(parseInt(i)!=v2) {           
            this.ringerValue1.toArray()[i].nativeElement.className = 'editRinger'
          }
        }
      } else if (v1==2) {
        if(this.ringerValue2.toArray()[v2].nativeElement.className == 'editRinger' ) {
          span.setAttribute('class','editRingerFill');
          this.ringText2 = span.innerText;
        }
        for(let i in this.ringerValue2.toArray()) {
          if(parseInt(i)!=v2) {         
            this.ringerValue2.toArray()[i].nativeElement.className = 'editRinger'
          }
        }
      }
  }

  onRoundFillBlue(line:number,divEle:HTMLDivElement) {
    console.log(this.lineValue1)

    if(divEle.className=='circle-badge-emptyblue') {
      divEle.setAttribute('class','circle-badge-blue')     
    } else {

      divEle.setAttribute('class','circle-badge-emptyblue')

    }

  }

  onRoundFillGreen(line:number,divEle:HTMLDivElement) {
    if(divEle.className == "circle-badge-emptygreen") {
      divEle.setAttribute('class','circle-badge-green')
    } else {
      divEle.setAttribute('class','circle-badge-emptygreen')
    }
      // this.lineValue2.toArray()[line].nativeElement.className='circle-badge-green'
  }
  


  onEdit(i:number) {
    if(i==1) {
      if(this.editEnable1==false) {
        this.editEnable1 = true;
      } else {
        this.editEnable1 = false;
      }

      if(this.editText1 == 'Edit') {
        this.editText1 = "Select"
      } else {
        this.editText1 = "Edit"
      }

    }
    
    if(i==2) {
      if(this.editEnable2 == false) {
        this.editEnable2 = true;
      } else {
        this.editEnable2 = false;
      }
      if(this.editText2 == 'Edit') {
        this.editText2 = "Select"
      } else {
        this.editText2 = "Edit"
      }
    }
  }

}
