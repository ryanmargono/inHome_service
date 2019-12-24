import expressLoader from './express.js'
import sqliteLoader from './sqlite.js'
import routes from '../api/index.js'

export default async (app) => {
    await expressLoader(app)
    await sqliteLoader.sync({logging: false})
    app.use(routes)
    
    return app
}