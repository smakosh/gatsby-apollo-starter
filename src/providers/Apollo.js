import React from 'react'
import fetch from 'unfetch'
import { ApolloProvider as Provider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { toast } from 'react-toastify'
import { createUploadLink } from 'apollo-upload-client'

export default ({ children }) => {
  const httpLink = createUploadLink({
    fetch,
    uri: process.env.GATSBY_GRAPHQL_API,
  })

  const errorLink = onError(({ networkError, graphQLErrors }) => {
    if (graphQLErrors) {
      toast.error(
        'There was an error while trying to connect to the server, please try again',
        {
          position: toast.POSITION.TOP_CENTER,
        }
      )
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    }
    if (networkError) {
      toast.error(`[Network error]: ${networkError}`, {
        position: toast.POSITION.TOP_CENTER,
      })
      console.log(`[Network err]: Message: ${networkError}`)
    }
  })

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
    },
  }))

  const link = ApolloLink.from([errorLink, authLink.concat(httpLink)])

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  })
  return <Provider client={client}>{children}</Provider>
}
