import fs from 'fs'
import path from 'path'
import Router from '@koa/router'
import Koa from 'koa'
import koaBody from 'koa-body'
import serve from 'koa-static'
import config from './config'

const app = new Koa()
const port: string | number = Number.parseInt(process.env.PORT) || 3000
const buildDir = path.resolve(__dirname, '..', '..', 'client', 'build')
const libraryDir = config.library

app.use(koaBody({ multipart: true }))

app.use(serve(buildDir))

const router = new Router()

router.post('/upload', (ctx) => {
  console.log(ctx.request.files)
  ctx.body = {
    files: ctx.request.files,
  }
  // const file = ctx.request.files.file
  // const reader = fs.createReadStream(file.path)
  // const stream = fs.createWriteStream(
  //   path.join(libraryDir, Math.random().toString())
  // )
  // reader.pipe(stream)
  // console.log(`uploading ${file.name} -> ${stream.path.toString()}`)
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
