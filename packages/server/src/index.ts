import * as express from 'express'

const app = express()
const port: string | number = Number.parseInt(process.env.PORT) || 3000

app.get('/', (req, res) => res.send('Hello, world!'))

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
