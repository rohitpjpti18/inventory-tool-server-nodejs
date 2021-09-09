import User from '../objects/user';
import userCollection from '../utilities/dbconnection';

let usermodel:any = {}

usermodel.addUser = async (newUser:User) => {
    let userModel = await userCollection.getUserModel();
    let insertedData = await userModel.create(newUser);

    if(insertedData){
        return insertedData;
    }else{
        let err = new Error("Error occured in adding user");
        throw err;
    }
}

usermodel.getUserByUsername = async (username:string) => {
    let userModel = await userCollection.getUserModel();
    let data = await userModel.find({username: username});
    
    return data;
}

usermodel.getUserByEmail = async (email:string) => {
    let userModel = await userCollection.getUserModel();
    let data = await userModel.find({email: email});

    return data;
}


export default usermodel;