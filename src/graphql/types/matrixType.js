const gql = require("graphql-tag");

module.exports = {
  typeDefs: gql`
    input MatrixInput {
      matrix: [[Int]]!
    }

    type Query {
      echo(input: MatrixInput!): String!
      invert(input: MatrixInput!): String!
      flatten(input: MatrixInput!): String!
      sum(input: MatrixInput!): Int!
      multiply(input: MatrixInput!): Int!
    }
  `,
};
