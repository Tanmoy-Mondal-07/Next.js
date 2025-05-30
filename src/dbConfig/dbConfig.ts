import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('mongo db connectrd');
        })

        connection.on('error',(error)=>{
            console.log('mongo db connection error', error);
            process.exit()
        })

    } catch (error) {
        console.log("db connect error : ", error);
    }
}