import * as Koa from 'koa'
import * as koaStatic from 'koa-static'

const app = new Koa()
const port: string | number = Number.parseInt(process.env.PORT) || 3000

/* eslint-disable functional/no-expression-statement */
app.use(koaStatic('../client/build'))

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
/* eslint-enable functional/no-expression-statement */
