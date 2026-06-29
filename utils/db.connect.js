import mongoose from "mongoose"

const DB_URI = process.env.DATABASE_URI
const DB_PATH = process.env.DATABASE_PATH
export const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(`${DB_URI}/${DB_PATH}`)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error : ${error.message}`);        
        process.exit(1)
    }
}