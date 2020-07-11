import { InputType, Field, ID } from 'type-graphql'
import RemoteTrackSource from '../../../entities/track-source-remote'

@InputType()
class RemoteTrackSourceInput implements Partial<RemoteTrackSource> {
  @Field(() => ID)
  trackId: number

  @Field()
  platform: string

  @Field()
  url: string

  @Field()
  protocol: string
}

export default RemoteTrackSourceInput
