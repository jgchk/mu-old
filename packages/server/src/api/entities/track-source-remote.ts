import { ObjectType, Field, ID } from 'type-graphql'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Lazy } from '../utils'
import Track from './track'

@Entity()
@ObjectType()
class RemoteTrackSource {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => Track)
  @ManyToOne(() => Track, (track) => track.remoteSources, { lazy: true })
  track: Lazy<Track>

  @Field()
  @Column()
  platform: string

  @Field()
  @Column()
  url: string

  @Field()
  @Column()
  protocol: string
}

export default RemoteTrackSource
