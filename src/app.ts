import express from 'express'
import router from './routes'
import 'dotenv/config'
import * as mongodb from 'mongodb'

const uri = process.env.LOCAL_DATABASE
export let client = new mongodb.MongoClient(uri)

const app = express()
const port = process.env.DEFAULT_PORT

app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`)
    client.connect()
})

app.use(router)

export const db = client.db(process.env.DATABASE_NAME)