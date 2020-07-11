import { InputType, Field, ID } from 'type-graphql'
import LocalTrackSource from '../../entities/track-source-local'

@InputType()
class LocalTrackSourceInput implements Partial<LocalTrackSource> {
  @Field(() => ID)
  trackId: number

  @Field()
  path: string
}

export default LocalTrackSourceInput
