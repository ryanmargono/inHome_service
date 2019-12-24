import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export default async (app) => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(morgan('dev'))
    app.use(cors())
    
    return app
}
