import * as path from 'path'
import * as Conf from 'conf'
import * as packageJson from '../../../package.json'

const config = new Conf({
  /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
  projectName: packageJson.name,
  projectVersion: packageJson.version,
  /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
  schema: {
    library: {
      type: 'string',
      default: path.resolve(__dirname, '..', '..', '..', 'library'),
    },
  },
})

export default config
