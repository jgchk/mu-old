import { ObjectType, Field, ID } from 'type-graphql'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm'
import { Lazy } from '../utils'
import Artist from './artist'
import LocalCover from './cover-local'
import RemoteCover from './cover-remote'
import Track from './track'

@Entity()
@ObjectType()
class Release {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number

  @Field(() => [Artist])
  @ManyToMany(() => Artist, (artist) => artist.releases, { lazy: true })
  artists: Lazy<Artist[]>

  @Field()
  @Column()
  title: string

  @Field(() => [Track])
  @OneToMany(() => Track, (track) => track.release, { lazy: true })
  tracks: Lazy<Track[]>

  @Field(() => [RemoteCover])
  @OneToMany(() => RemoteCover, (cover) => cover.release, {
    lazy: true,
    cascade: true,
  })
  remoteCovers: Lazy<RemoteCover[]>

  @Field(() => [LocalCover])
  @OneToMany(() => LocalCover, (cover) => cover.release, {
    lazy: true,
    cascade: true,
  })
  localCovers: Lazy<LocalCover[]>
}

export default Release
