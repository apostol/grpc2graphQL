# grpc2graphQL
My experiment with grpc &amp; apollo-server

The main goal is demonstrate what i can do, but i don't rich the goal of fully implement all endpoints. This action is required more time but is not make sense becouse this is a test task only.

#How it run?
```
docker-compose build
docker-compose up
```

I'm reaaly sure that i'll implement all endpoins and  describe GraphQL by rules defined by team.

Please implement a small Apollo/GraphQL service, that consumes data from the gRPC service and exposes it to the users via the GraphQL API.

- the service should accept the API key as an environment variable [Done]
- all of the endpoints must be protected with an Bearer Authorization schema [Done]
  - No need to implement authorization; Auth token can be static, and also passed as en environment variable
- GraphQL schema must be well defined [Partially, but enought to understand that i can do it by team rules]
- Basic error management must be implemented [Partially i don't sure that i understand "Basic error management" correctly]
  - Anyway, i have set event listeners on "uncaughtException" and "unhandledRejection"


