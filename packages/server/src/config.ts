import path from 'path'
import Conf from 'conf'
import expandTilde from 'expand-tilde'

interface Config {
  library: string
  database: string
}

const config = new Conf<Config>({
  schema: {
    library: {
      type: 'string',
      default: path.resolve(__dirname, '..', '..', '..', 'library'),
    },
    database: {
      type: 'string',
      default: path.resolve(__dirname, '..', '..', '..', 'library.db'),
    },
  },
})

export default {
  library: expandTilde(config.get('library')),
  database: expandTilde(config.get('database')),
}
