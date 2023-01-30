import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations'],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;


// .yml syntax

// schema: http://localhost:3000/api/graphql
// documents: './client/**/*.graphql'
// generates:
//   ./client/generated/graphql.ts:
//     plugins:
//       - typescript
//       - typescript-operations
