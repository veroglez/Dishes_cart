import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ProviderData } from './common/context/context';
import { CardList } from './Components';
import './App.css';

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
                data && <CardList dishes={data.dishes} />
              );
            }
          }
        </Query>
      </div>
    </ProviderData>

  );
}

export default App;
