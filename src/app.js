import express from 'express'
import loaders from './loaders/index.js'
import dotenv from 'dotenv'

async function startServer() {
    dotenv.config({path:'.env'})
    const app = express()
    await loaders(app)

    app.listen(process.env.PORT, err => err ? console.log(err) : console.log(`sever listening on port ${process.env.PORT}`))
}

startServer()