import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ProviderData } from './common/context/context';
import { CardList, Header } from './Components';

const query = gql`
  {
    dishes {
    name
    price
    image
  }
}`;

function App() {
  return (
    <ProviderData>
      <div className="App">
        <Query query={query}>
          {
            ({ data, loading }) => {
              if (loading) return 'loading...';
              return (
                <Fragment>
                  <Header />
                  {data && <CardList dishes={data.dishes} />}
                </Fragment>
              );
            }
          }
        </Query>
      </div>
    </ProviderData>

  );
}

export default App;
