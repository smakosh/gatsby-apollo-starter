import React from 'react'
import Container from 'components/common/Container'
import PostLoader from 'components/common/PostLoader'
import Flex from 'components/common/Flex'
import Item from 'components/common/Item'
import { Query } from 'react-apollo'
import GET_LAUNCHES from './getLaunches.graphql'
import { Wrapper, Card, Title, Video } from './styles'
import Layout from 'components/common/Layout'

export default () => (
  <Query query={GET_LAUNCHES}>
    {({ loading, error, data }) => {
      if (error) {
        console.log(error)
      }

      const { launchesPast } = data

      return (
        <Layout>
          <Wrapper as={Container}>
            <h1>Past launches</h1>
            {loading ? (
              <PostLoader />
            ) : (
              <Flex>
                {launchesPast.map(
                  ({ id, mission_name, links: { video_link } }) => (
                    <Item
                      col="3"
                      colTablet="2"
                      colMobile="1"
                      stretch
                      marginBottom="2rem"
                      key={id}
                    >
                      <Card>
                        <Title>
                          <h4>{mission_name}</h4>
                        </Title>
                        <Video>
                          <iframe
                            title={mission_name}
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${
                              video_link.split('=')[1]
                            }`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </Video>
                      </Card>
                    </Item>
                  )
                )}
              </Flex>
            )}
          </Wrapper>
        </Layout>
      )
    }}
  </Query>
)
