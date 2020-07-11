import { Resolver, Query, Arg, ID, Mutation } from 'type-graphql'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import Artist from '../entities/artist'
import ArtistInput from './types/artist-input'

@Resolver(Artist)
class ArtistResolver {
  constructor(
    @InjectRepository(Artist)
    private readonly artistRepository: Repository<Artist>
  ) {}

  @Query(() => Artist)
  artist(@Arg('artistId', () => ID) artistId: number): Promise<Artist> {
    return this.artistRepository.findOneOrFail(artistId)
  }

  @Query(() => [Artist])
  artists(): Promise<Artist[]> {
    return this.artistRepository.find()
  }

  @Mutation(() => Artist)
  addArtist(@Arg('artist') artistInput: ArtistInput): Promise<Artist> {
    const artist = this.artistRepository.create({ ...artistInput })
    return this.artistRepository.save(artist)
  }
}

export default ArtistResolver
