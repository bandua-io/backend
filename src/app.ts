import express from 'express'
import router from './routes'
import 'dotenv/config'

const app = express()
const port = process.env.DEFAULT_PORT

app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`)
})

app.use(router)