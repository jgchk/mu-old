import { InputType, Field } from 'type-graphql'
import Artist from '../../entities/artist'

@InputType()
class ArtistInput implements Partial<Artist> {
  @Field()
  name: string
}

export default ArtistInput
