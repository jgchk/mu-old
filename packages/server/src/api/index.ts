import { ApolloServer } from 'apollo-server-koa'
import { buildSchema } from 'type-graphql'
import { Container } from 'typedi'
import { useContainer, createConnection } from 'typeorm'
import config from '../config'
import Artist from './entities/artist'
import Release from './entities/release'
import Track from './entities/track'
import RemoteTrackSource from './entities/track-source/track-source-remote'
import ArtistResolver from './resolvers/artist-resolver'
import ReleaseResolver from './resolvers/release-resolver'
import TrackResolver from './resolvers/track-resolver'

const createApolloServer = async (): Promise<ApolloServer> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useContainer(Container)

  await createConnection({
    type: 'sqlite',
    database: config.database,
    entities: [Artist, Release, Track, RemoteTrackSource],
    synchronize: true,
  })

  const schema = await buildSchema({
    resolvers: [ArtistResolver, ReleaseResolver, TrackResolver],
    container: Container,
  })

  return new ApolloServer({ schema })
}

export default createApolloServer
