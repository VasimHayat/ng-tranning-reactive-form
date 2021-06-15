import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './common/custom.validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

    constructor(private fb:FormBuilder){
       
    }

    isSubmited:boolean;

    firstName:string;
        lastName:string;
        emailID:string;
        country:string;
        password:string;
        confirm_password:string;
        address:string;
        subscriptionType:string;
        isAgree:boolean; 

    userForm = this.fb.group({
       firstName:this.fb.control('',[Validators.required,Validators.minLength(3)]),
       lastName:this.fb.control(''),

       emailID:this.fb.control('',[Validators.required],CustomValidators.emailValidator),


       country:this.fb.control(''),

       password:this.fb.control('',[Validators.required]),
       confirm_password:this.fb.control('',Validators.required),

       address:this.fb.control('',[Validators.required]),
       subscriptionType:this.fb.control('',[Validators.required]) 

    },{validators:CustomValidators.passwordMatcher})
    
 
    formSubmitAction(){
            this.isSubmited = true;
    }

 
}

 