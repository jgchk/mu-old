import { InputType, Field, ID } from 'type-graphql'
import LocalCover from '../../entities/cover-local'

@InputType()
class LocalCoverInput implements Partial<LocalCover> {
  @Field(() => ID)
  releaseId: number

  @Field()
  path: string
}

export default LocalCoverInput
