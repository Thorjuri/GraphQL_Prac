const TypePerson = new Graphql.GraphQLObjectType({
    name: "Person",
    fields: {
      name: { type: Graphql.GraphQLString },
      age: { type: Graphql.GraphQLInt },
    },
  });
  
  const TypeQuery = new Graphql.GraphQLObjectType({
    name: "Query",
    fields: {
      hello: {
        type: Graphql.GraphQLString,
        resolve: () => "Hello world!",
      },
      persons: {
        type: Graphql.GraphQLList(TypePerson),
        resolve: () => {
          console.log("hahah");
          return [
            { name: "kim", age: 29 },
            { name: "seo", age: 31 },
            { name: "park", age: 32 },
          ];
        },
      },
    },
  });
  
  const schema = new Graphql.GraphQLSchema({ query: TypeQuery });