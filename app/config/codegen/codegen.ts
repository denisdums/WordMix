import type {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: './app/graphql/**/*.gql',
    documents: ['./app/graphql/**/*.gql'],
    emitLegacyCommonJSImports: false,
    generates: {
        './app/graphql/build/': {
            preset: 'graphql-modules',
            presetConfig: {
                baseTypesPath: '../build/graphql.ts',
                filename: 'build/module-types.ts'
            },
            plugins: [
                'typescript',
                'typescript-resolvers',
                'typescript-operations',
                'typed-document-node',
                './app/config/codegen/plugins/generate-typedefs.js'
            ]
        },
    },
}
export default config