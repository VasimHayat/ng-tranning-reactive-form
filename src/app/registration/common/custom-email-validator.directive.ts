import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [ 
    { provide:NG_VALIDATORS, useExisting:forwardRef(()=>CustomEmailValidatorDirective),multi:true }
  ]
})
export class CustomEmailValidatorDirective implements Validator {
    
    validate(c: AbstractControl) {
        const emailArray = ['vasim@gmail.com'];

        if(c && emailArray.indexOf(c.value) !=-1){
            return null;
        }else{
            return {isValidEmail:false}
        }
    }
}
