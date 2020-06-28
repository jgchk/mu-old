import path from 'path'
import Conf from 'conf'
import expandTilde from 'expand-tilde'

type Config = {
  readonly library: string
}

const config = new Conf<Config>({
  schema: {
    library: {
      type: 'string',
      default: path.resolve(__dirname, '..', '..', '..', 'library'),
    },
  },
})

export default {
  library: expandTilde(config.get('library')),
}
