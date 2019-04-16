import React, { Component } from 'react'
import Link from './Link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  {
    feed {
      id
      url
      description
    }
  }
`

class LinkList extends Component {
	state = {
		data: [], 
		columns: [],
	}

  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>{error.toString()}</div>
    
          const linksToRender = data.feed
    
          return (
            <div>
              {linksToRender.map(link => <Link key={link.id} link={link} />)}
            </div>
          )
        }}
      </Query>
    )

  }
}

export default LinkList