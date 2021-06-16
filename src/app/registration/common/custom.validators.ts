import { FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class CustomValidators{


    static emailValidator(c:FormControl){
        let emailArray = ['vasim@gmail.com'];


       return new Promise((resolve)=>{ 
           
            setTimeout(()=>{
                if(c && emailArray.indexOf(c.value) !=-1){
                    resolve(null);
                }else{ 
                    resolve({isValidEmail:false})
                }
            },1000)
        })

        // if(c && emailArray.indexOf(c.value) !=-1){
        //     return null;
        // }else{
        //     return {isValidEmail:false}
        // }
    }


    static passwordMatcher(c:FormGroup){
        
        let pwd =c.controls.password;
        let cPwd =c.controls.confirm_password;

        

        if(c && pwd.value == cPwd.value){
            return null;
        }else{
            return {isValidPwd:false}
        }
    }

}