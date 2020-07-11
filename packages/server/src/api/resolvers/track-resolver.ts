import { Resolver, Query, Arg, ID, Mutation } from 'type-graphql'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import Artist from '../entities/artist'
import Release from '../entities/release'
import Track from '../entities/track'
import RemoteTrackSource from '../entities/track-source/track-source-remote'
import TrackInput from './types/track-input'
import RemoteTrackSourceInput from './types/track-source-input/track-source-remote-input'

@Resolver(Track)
class TrackResolver {
  constructor(
    @InjectRepository(Release)
    private readonly releaseRepository: Repository<Release>,
    @InjectRepository(Track)
    private readonly trackRepository: Repository<Track>,
    @InjectRepository(Artist)
    private readonly artistRepository: Repository<Artist>,
    @InjectRepository(RemoteTrackSource)
    private readonly remoteTrackSourceRepository: Repository<RemoteTrackSource>
  ) {}

  @Query(() => Track)
  track(@Arg('trackId', () => ID) trackId: number): Promise<Track> {
    return this.trackRepository.findOneOrFail(trackId)
  }

  @Query(() => [Track])
  tracks(): Promise<Track[]> {
    return this.trackRepository.find()
  }

  @Mutation(() => Track)
  async addTrack(@Arg('track') trackInput: TrackInput): Promise<Track> {
    const release = await this.releaseRepository.findOneOrFail(
      trackInput.releaseId
    )

    const artists = await Promise.all(
      trackInput.artistIds.map((artistId) =>
        this.artistRepository.findOneOrFail(artistId)
      )
    )

    const track = this.trackRepository.create({
      ...trackInput,
      release,
      artists,
    })

    return this.trackRepository.save(track)
  }

  @Mutation(() => Track)
  async addRemoteTrackSource(
    @Arg('source', () => RemoteTrackSourceInput)
    sourceInput: RemoteTrackSourceInput
  ): Promise<Track> {
    const track = await this.trackRepository.findOneOrFail(
      sourceInput.trackId,
      { relations: ['remoteSources'] }
    )

    const sources = await track.remoteSources
    sources.push(this.remoteTrackSourceRepository.create({ ...sourceInput }))

    return this.trackRepository.save(track)
  }
}

export default TrackResolver
