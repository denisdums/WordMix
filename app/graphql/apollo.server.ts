import {loadDevMessages} from "@apollo/client/dev";
import {ApolloClient, InMemoryCache} from "@apollo/client/index.js";
import {makeExecutableSchema} from "@graphql-tools/schema";
import {SchemaLink} from "@apollo/client/link/schema/index.js";
import Modules from "~/graphql/modules";
import {ApolloClientOptions} from "@apollo/client/core/ApolloClient";
import {typeDefs} from "~/graphql/build/graphql";

export class GraphqlClient extends ApolloClient<any> {
    constructor() {
        const resolvers = Modules.map((module) => module.resolvers).flat();
        const context = Modules.map((module) => module.enhanceContext).filter(Boolean).reduce((acc, enhanceContext) => enhanceContext ? enhanceContext(acc) : acc, {});
        const schema = makeExecutableSchema({
            typeDefs,
            resolvers,
        });

        const options: ApolloClientOptions<any> = {
            cache: new InMemoryCache(),
            link: new SchemaLink({schema, context}),
            ssrMode: true,
        };

        super(options);

        loadDevMessages();
    }
}
