import path from 'path'
import Router from '@koa/router'
import { ReleaseRequest } from '@mu/api'
import Koa from 'koa'
import koaBody from 'koa-body'
import serve from 'koa-static'
import { Record, String } from 'runtypes'
import { release } from './soundcloud/release'
import { search } from './soundcloud/search'

const app = new Koa()
const port: string | number = Number.parseInt(process.env.PORT) || 3000
const buildDir = path.resolve(__dirname, '..', '..', 'client', 'build')

app.use(koaBody({ multipart: true }))

app.use(serve(buildDir))

const router = new Router()

router.post('/upload', (ctx) => {
  console.log(ctx.request.files)
  // const file = ctx.request.files.file
  // const reader = fs.createReadStream(file.path)
  // const stream = fs.createWriteStream(
  //   path.join(libraryDir, Math.random().toString())
  // )
  // reader.pipe(stream)
  // console.log(`uploading ${file.name} -> ${stream.path.toString()}`)
  ctx.body = {
    files: ctx.request.files,
  }
})

const SearchRequest = Record({
  query: String,
})

router.get('/search', async (ctx) => {
  const { query } = SearchRequest.check(ctx.query)
  ctx.body = await search(query)
})

router.get('/release', async (ctx) => {
  const { source, id } = ReleaseRequest.check(ctx.query)
  ctx.body = await release(id)
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
