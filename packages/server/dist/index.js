'use strict'
var _a
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = require('express')
const app = express_1.default()
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : '3000'
app.get('/', (req, res) => res.send('Hello, world!'))
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
//# sourceMappingURL=index.js.map
