import { Request } from "express";

class User{
    userId: number;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    confirmPassword: string;

    constructor (body: Request["body"]){
        this.userId = body.userId;
        this.username = body.username;
        this.email = body.email;
        this.password = body.password;
        this.confirmPassword = body.confirmPassword;
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.dateOfBirth = body.dateOfBirth;
        this.gender = body.gender;
    }
}

export default User;