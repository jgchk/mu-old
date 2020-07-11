import { ObjectType, Field, ID } from 'type-graphql'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import { Lazy } from '../utils'
import Release from './release'
import Track from './track'

@Entity()
@ObjectType()
class Artist {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number

  @Field()
  @Column()
  name: string

  @Field(() => [Release])
  @ManyToMany(() => Release, (release) => release.artists, { lazy: true })
  @JoinTable()
  releases: Lazy<Release[]>

  @Field(() => [Track])
  @ManyToMany(() => Track, (track) => track.artists, { lazy: true })
  @JoinTable()
  tracks: Lazy<Track[]>
}

export default Artist
