import path from 'path'
import Koa from 'koa'
import koaBody from 'koa-body'
import serve from 'koa-static'
import createApolloServer from './api'

const createApp = async (): Promise<Koa> => {
  const app = new Koa()

  app.use(koaBody())

  const buildDir = path.resolve(__dirname, '..', '..', 'client', 'build')
  app.use(serve(buildDir))

  const apolloServer = await createApolloServer()
  apolloServer.applyMiddleware({ app })

  return app
}

export default createApp
