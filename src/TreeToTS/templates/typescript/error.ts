export const graphqlErrorTypeScript = `
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
    }
    toString() {
      return "GraphQL Response Error";
    }
  }
`;
