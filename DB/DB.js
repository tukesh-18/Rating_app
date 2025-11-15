import mongoose from "mongoose";


const ConnectDB = async () =>{
    try {

        await mongoose.connect('mongodb://localhost:27017/myDatabase');
        console.log("Database Connected");
        
    } catch (error) {
        console.log(error);
    }
}

export default ConnectDB;