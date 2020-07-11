import { InputType, Field, ID } from 'type-graphql'
import RemoteCover from '../../entities/cover-remote'

@InputType()
class RemoteCoverInput implements Partial<RemoteCover> {
  @Field(() => ID)
  releaseId: number

  @Field()
  url: string
}

export default RemoteCoverInput
