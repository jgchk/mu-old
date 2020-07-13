// eslint-disable-next-line import/no-named-as-default
import ApolloClient from 'apollo-boost'

const apollo = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
})

export default apollo
