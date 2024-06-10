import mongoose from "mongoose"

export const connectToMongoDatabase = async (dbUrl: string) => {
    try {
        await mongoose.connect(dbUrl)
    } catch (error) {
        console.log(error);
        throw new Error("ERROR: cannot connect to database")
    }
}