import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('name') nameInputRef:ElementRef;
  @ViewChild('password') password:ElementRef;
  @ViewChild('f') slsForm:NgForm
  

  constructor(private router:Router) { }

  ngOnInit() {
    this.nameInputRef.nativeElement.value = "abcdef@cisco.com"
    this.password.nativeElement.value = "abcdefge"

  }

  addForm(form:Form) {
    
    this.router.navigate(['/','devices']);
  }

}
