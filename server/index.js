const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    dishes: [Dish]
  }
  type Dish {
    name: String
    image: String
    """Prices are in EUR cents"""
    price: Int
  }
`

const resolvers = {
  Query: {
    dishes: () =>
      new Promise(resolve =>
        setTimeout(
          () => resolve(require('./dishes.json')),
          // simulate delay
          3000
        )
      )
  },
  Dish: {
    image: ({id, slug}) =>
      `https://wetaca.com/images/products/${id}/catalog/${slug}_A.jpg`
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => console.log('Server is running on localhost:4000'))