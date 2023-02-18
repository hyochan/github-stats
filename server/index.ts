import {ApolloServer} from '@apollo/server';
import {applyMiddleware} from 'graphql-middleware';
import {schema} from './schema';

export const schemaWithMiddleware =
  process.env.NODE_ENV === 'development' ? schema : applyMiddleware(schema);

const apolloServer = new ApolloServer({
  schema: schemaWithMiddleware,
  introspection: process.env.NODE_ENV !== 'production',
});

// For serverless function
apolloServer.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();

export {apolloServer};
