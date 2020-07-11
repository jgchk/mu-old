import { InputType, Field, ID, Int } from 'type-graphql'
import Track from '../../entities/track'

@InputType()
class TrackInput implements Partial<Track> {
  @Field(() => ID)
  releaseId: number

  @Field(() => [ID])
  artistIds: number[]

  @Field(() => Int)
  num: number

  @Field()
  title: string
}

export default TrackInput
