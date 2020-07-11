import { InputType, Field, ID } from 'type-graphql'

@InputType()
abstract class TrackSourceInput {
  @Field(() => ID)
  trackId: number
}

export default TrackSourceInput
