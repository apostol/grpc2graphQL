import { readFileSync } from 'node:fs';
import { ApolloServer, AuthenticationError } from "apollo-server";
import djTestPomsAPI from './grpcClient';
import { Order, Product } from '../proto/djtestpoms_pb';

const typeDefs = readFileSync('proto/djtestpoms.modified.graphql').toString();
const resolvers = {
  Query: {
    Products: async (_source:any, args:any , _context:any ) => {
      //[14, 17, 32, 42]
      return _context.dataSources.djTestAPI.getProducts(args.products.ids);
    },
  },
  Mutation: {
    CreateOrder: async (_source: any, args:any, _context: any) => {
      let ids = args.createOrderRequest.items as []
      let order =  await _context.dataSources.djTestAPI.createOrder(ids)
      return {
        code:0,
        message: 'OK',
        success: 0,
        order
      }
    }
  },
  djtestpoms_Product: {
    categoryId: async(parent:Product.AsObject, args:any , _context:any) => {
      return _context.dataSources.djTestAPI.getCategories(parent.categoryId);
    }
  },
  djtestpoms_Order: {
    status: (parent:Order.AsObject, args:any , _context:any) => {
      return _context.dataSources.djTestAPI.getOrderStatus(parent.status);
    },
    items: (parent:Order.AsObject, args:any , _context:any) => {
      return parent.itemsMap.map((c)=>{ return { key: c[0], value: c[1]}})
    },
  },

  //Subscription: {}
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  debug: true,
  cache: "bounded",
  dataSources: () => ({
    djTestAPI: new djTestPomsAPI(
      process.env.API_HOST || "localhost:8080",
      process.env.API_KEY || "dQw4w9WgXcQ"
    )
  }),
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    if (token === process.env.AUTH_TOKEN){
      return {
        token: process.env.AUTH_TOKEN
      }
    }
    throw new AuthenticationError('you must be logged in');
   },
});
server.listen(process.env.PORT || 4000).then((_) => {
  console.log(`Server is running! Listening on ${_.url}. 
    API Key = ${process.env.API_KEY}
    Auth Token = ${process.env.AUTH_TOKEN}
  `);
});

process.on("uncaughtException", (err) => {
  console.log(`process on uncaughtException error: ${err}`);
});
process.on("unhandledRejection", (err) => {
  console.log(`process on unhandledRejection error: ${err}`);
});