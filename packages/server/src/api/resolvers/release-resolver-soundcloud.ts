import { Resolver, Mutation, Arg } from 'type-graphql'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import resolve from '../../remote/soundcloud/resolve'
import Artist from '../entities/artist'
import RemoteCover from '../entities/cover-remote'
import Release from '../entities/release'
import Track from '../entities/track'
import RemoteTrackSource from '../entities/track-source-remote'

@Resolver(Release)
class SoundcloudReleaseResolver {
  constructor(
    @InjectRepository(Release)
    private readonly releaseRepository: Repository<Release>,
    @InjectRepository(Artist)
    private readonly artistRepository: Repository<Artist>,
    @InjectRepository(RemoteCover)
    private readonly remoteCoverRepository: Repository<RemoteCover>,
    @InjectRepository(Track)
    private readonly trackRepository: Repository<Track>,
    @InjectRepository(RemoteTrackSource)
    private readonly remoteTrackSourceRepository: Repository<RemoteTrackSource>
  ) {}

  @Mutation(() => Release)
  async addSoundcloudRelease(@Arg('url') url: string): Promise<Release> {
    const scRelease = await resolve(url)

    let artist: Artist
    try {
      artist = await this.artistRepository.findOneOrFail({
        name: scRelease.artist,
      })
    } catch {
      artist = await this.artistRepository.save(
        this.artistRepository.create({ name: scRelease.artist })
      )
    }

    const release = await this.releaseRepository.save(
      this.releaseRepository.create({
        artists: [artist],
        title: scRelease.title,
      })
    )

    await this.remoteCoverRepository.save(
      this.remoteCoverRepository.create({ release, url: scRelease.cover })
    )

    await Promise.all(
      scRelease.tracks.map(async (scTrack, i) => {
        let trackArtist: Artist
        try {
          trackArtist = await this.artistRepository.findOneOrFail({
            name: scTrack.artist,
          })
        } catch {
          trackArtist = await this.artistRepository.save(
            this.artistRepository.create({ name: scTrack.artist })
          )
        }

        const track = await this.trackRepository.save(
          this.trackRepository.create({
            release,
            artists: [trackArtist],
            num: i + 1,
            title: scTrack.title,
          })
        )

        await Promise.all(
          scTrack.sources.map(async (scSource) =>
            this.remoteTrackSourceRepository.save(
              this.remoteTrackSourceRepository.create({
                ...scSource,
                track,
                platform: 'soundcloud',
              })
            )
          )
        )
      })
    )

    return this.releaseRepository.findOne(release.id)
  }
}

export default SoundcloudReleaseResolver
