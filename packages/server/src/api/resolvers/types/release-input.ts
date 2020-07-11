import { InputType, Field, ID } from 'type-graphql'
import Release from '../../entities/release'

@InputType()
class ReleaseInput implements Partial<Release> {
  @Field(() => [ID])
  artistIds: number[]

  @Field()
  title: string
}

export default ReleaseInput
