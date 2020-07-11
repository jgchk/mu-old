import { Resolver, Query, Arg, ID, Mutation } from 'type-graphql'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import Artist from '../entities/artist'
import Release from '../entities/release'
import Track from '../entities/track'
import LocalTrackSource from '../entities/track-source-local'
import RemoteTrackSource from '../entities/track-source-remote'
import TrackInput from './types/track-input'
import LocalTrackSourceInput from './types/track-source-local-input'
import RemoteTrackSourceInput from './types/track-source-remote-input'

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
    private readonly remoteTrackSourceRepository: Repository<RemoteTrackSource>,
    @InjectRepository(LocalTrackSource)
    private readonly localTrackSourceRepository: Repository<LocalTrackSource>
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
    @Arg('source')
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

  @Mutation(() => Track)
  async addLocalTrackSource(
    @Arg('source') sourceInput: LocalTrackSourceInput
  ): Promise<Track> {
    const track = await this.trackRepository.findOneOrFail(
      sourceInput.trackId,
      { relations: ['localSources'] }
    )

    const sources = await track.localSources
    sources.push(this.localTrackSourceRepository.create({ ...sourceInput }))

    return this.trackRepository.save(track)
  }
}

export default TrackResolver
