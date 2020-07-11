import { Resolver, Arg, ID, Query, Mutation } from 'type-graphql'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import Artist from '../entities/artist'
import Release from '../entities/release'
import ReleaseInput from './types/release-input'

@Resolver(Release)
class ReleaseResolver {
  constructor(
    @InjectRepository(Release)
    private readonly releaseRepository: Repository<Release>,
    @InjectRepository(Artist)
    private readonly artistRepository: Repository<Artist>
  ) {}

  @Query(() => Release)
  release(@Arg('releaseId', () => ID) releaseId: number): Promise<Release> {
    return this.releaseRepository.findOneOrFail(releaseId)
  }

  @Query(() => [Release])
  releases(): Promise<Release[]> {
    return this.releaseRepository.find()
  }

  @Mutation(() => Release)
  async addRelease(
    @Arg('release') releaseInput: ReleaseInput
  ): Promise<Release> {
    const artists = await Promise.all(
      releaseInput.artistIds.map((artistId) =>
        this.artistRepository.findOneOrFail(artistId)
      )
    )

    const release = this.releaseRepository.create({ ...releaseInput, artists })

    return this.releaseRepository.save(release)
  }
}

export default ReleaseResolver
