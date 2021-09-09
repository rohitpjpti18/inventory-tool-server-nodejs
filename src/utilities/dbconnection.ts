import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
import user from '../schema/user';

const schema = mongoose.Schema;


const URL = 'mongodb://localhost:27017/CarParkingDB';

let userschema = new schema(user, {collection: "CAR_PARKING_USER", timestamps: true});

let connection:any = {}

connection.getUserModel = async() => {
    try{
        return (await mongoose.connect(URL)).model("CAR_PARKING_USER", userschema);
    }catch(err){
        throw err;
    }
}

export default connection;