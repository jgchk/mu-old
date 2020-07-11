import { ObjectType, Field, ID, Int } from 'type-graphql'
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  Index,
  ManyToMany,
  OneToMany,
} from 'typeorm'
import { Lazy } from '../utils'
import Artist from './artist'
import Release from './release'
import RemoteTrackSource from './track-source/track-source-remote'

@Entity()
@Index(['release', 'num'], { unique: true })
@ObjectType()
class Track {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number

  @Field(() => Release)
  @ManyToOne(() => Release, (release) => release.tracks, { lazy: true })
  release: Lazy<Release>

  @Field(() => [Artist])
  @ManyToMany(() => Artist, (artist) => artist.tracks, { lazy: true })
  artists: Lazy<Artist[]>

  @Field(() => Int)
  @Column()
  num: number

  @Field()
  @Column()
  title: string

  @Field(() => [RemoteTrackSource])
  @OneToMany(() => RemoteTrackSource, (source) => source.track, {
    lazy: true,
    cascade: true,
  })
  remoteSources: Lazy<RemoteTrackSource[]>
}

export default Track