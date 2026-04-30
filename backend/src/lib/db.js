import mongoose from 'mongoose'

export const connectDB = async()=>{
    try {

        const {MONGO_URI} = process.env

        if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is not configured")
     }
        
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB CONNECTED:", conn.connection.host)
        
    } catch (error) {
        // console.log("Error connecting to MONGODB:", error)

        //After CR
         console.error("Error connecting to MONGODB:", error?.message)
        process.exit(1) // 1 status code means failed, 0 means success
    }
}