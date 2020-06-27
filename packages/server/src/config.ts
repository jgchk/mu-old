import path from 'path'
import Conf from 'conf'

const config = new Conf({
  schema: {
    library: {
      type: 'string',
      default: path.resolve(__dirname, '..', '..', '..', 'library'),
    },
  },
})

export default config
