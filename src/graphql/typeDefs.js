const { mergeTypeDefs } = require("@graphql-tools/merge");

const {
  typeDefs: matrixTypeTypeDefs,
} = require("project/graphql/types/matrixType");

const typeDefs = mergeTypeDefs([matrixTypeTypeDefs]);

module.exports = { typeDefs };
