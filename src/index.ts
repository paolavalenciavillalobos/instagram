import dotenv from 'dotenv'
import { ConnectionMongo } from './database/connection'
import express from 'express'
import { routes } from './routes/routes'
//import { routes } from './src/routes/routes'


dotenv.config()
ConnectionMongo.connect()

const app = express()

app.use(express.json)
app.use(routes)

app.listen(process.env.PORT, () =>  console.log(`server is running on port ${process.env.PORT}`) )

