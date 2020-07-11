import { ObjectType, Field, ID } from 'type-graphql'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Lazy } from '../utils'
import Track from './track'

@Entity()
@ObjectType()
class LocalTrackSource {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => Track)
  @ManyToOne(() => Track, (track) => track.remoteSources, { lazy: true })
  track: Lazy<Track>

  @Field()
  @Column()
  path: string
}

export default LocalTrackSource
