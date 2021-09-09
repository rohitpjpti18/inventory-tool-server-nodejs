import usermodel from "../model/usermodel";
import User from "../objects/user";


let validation:any = {}

validation.validateNewUser = (newUser:User) =>{
    let validationReport = {};
    let validationErrors:any = {}
    if(newUser.password && newUser.confirmPassword && newUser.confirmPassword === newUser.password){
        
    }else{
        validationErrors.passwordError = "Password and confirm password empty and(or) donot match";
    }

    if(newUser.username){
        let user = usermodel.getUserByUsername(newUser.username);
        if(user){
            validationErrors.usernameError = "username already exists"
        }
    }else{
        validationErrors.usernameError = "Username cannot be empty";
    }

    if(newUser.email){
        let user = usermodel.getUserByEmail(newUser.email);
        if(user){
            validationErrors.emailError = "Email already in use."
        }
    }else{
        validationErrors.emailError = "Email cannot be empty";
    }

    if(newUser.dateOfBirth){

    }else{
        validationErrors.dateOfBirth = "Date of birth cannot be empty";
    }
}

export default validation;