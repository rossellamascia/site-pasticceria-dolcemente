import { defineConfig } from 'orval';

export default defineConfig({
  petstore: {
    output: {
      mode: 'split',
      target: 'src/apis/rest/endpoints.ts',
      schemas: 'src/apis/rest/model',
      client: 'react-query',
    },
    input: {
      target: './backend-mock/openapi-schema.yaml',
    },
  },
});
