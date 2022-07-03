import { Document, WithId } from "mongodb"
import { db } from "../app"
import { User } from "../models/user"

export const getUsers = async () : Promise<WithId<Document>[]> => {
    try {
        return await db.collection('users').find({}).toArray()
    } catch (error) {
        console.log(`getUsers - Error fetching users, error ${error}`)
    }
}

export const createUser = async (user: User) : Promise<boolean> => {
    try {
        await db.collection('users').insertOne(user)
    } catch (error) {
        console.log(`createUser - Error creating user, error: ${error}`)
        return false
    }
    return true
}

// TODO
// export const getUser = async (userId: string) : Promise<User> => {
//     try {

//     } catch (error) {
//         return
//     }
//     return
// }