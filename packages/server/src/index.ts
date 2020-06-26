import * as Koa from 'koa'
import * as koaStatic from 'koa-static'

const app = new Koa()
const port: string | number = Number.parseInt(process.env.PORT) || 3000

app.use(koaStatic('../client/build'))

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
