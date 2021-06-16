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
        addressArray:Array<string>;
        subscriptionType:string;
        isAgree:boolean; 
        phoneNumber:string;


     userForm = this.fb.group({
       firstName:this.fb.control('',[Validators.required,Validators.minLength(3)]),
       lastName:this.fb.control(''),

       emailID:this.fb.control('',[Validators.required]),


       country:this.fb.control(''),

       password:this.fb.control('',[Validators.required]),
       confirm_password:this.fb.control('',Validators.required),

       addressArray:this.fb.array([
          this.buildNewAddress()
       ]),

       subscriptionType:this.fb.control('',[Validators.required]) ,

       phoneNumber:this.fb.control('')

    },{validators:CustomValidators.passwordMatcher})
    
 
    getAddressArray(){
      return  <FormArray>  this.userForm.controls.addressArray;
    }

    buildNewAddress(){
        // return this.fb.control('')
        
        
        return this.fb.group({ 
            address:this.fb.control('')
        });
    }

    addNewAddress(){
        this.getAddressArray().push(this.buildNewAddress());
    }
    formSubmitAction(){
         console.log(this.userForm);
         
            this.isSubmited = true;
    }

    subscriptionAction(supKey:string){
        const phControl = this.userForm.controls.phoneNumber;
        if(supKey =='Mobile'){
           
            phControl.setValidators(Validators.required);
            phControl.updateValueAndValidity();
        }else{
            phControl.clearValidators();
            phControl.updateValueAndValidity();
        }
    }
 
}

 