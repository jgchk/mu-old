import { InputType, Field } from 'type-graphql'
import RemoteTrackSource from '../../../entities/track-source-remote'
import TrackSourceInput from './track-source-input'

@InputType()
class RemoteTrackSourceInput extends TrackSourceInput
  implements Partial<RemoteTrackSource> {
  @Field()
  url: string

  @Field()
  protocol: string
}

export default RemoteTrackSourceInput
