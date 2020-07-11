import { ObjectType, Field, ID } from 'type-graphql'
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm'
import { Lazy } from '../utils'
import Release from './release'

@Entity()
@ObjectType()
class RemoteCover {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => Release)
  @ManyToOne(() => Release, (release) => release.remoteCovers, { lazy: true })
  release: Lazy<Release>

  @Field()
  @Column()
  url: string
}

export default RemoteCover
