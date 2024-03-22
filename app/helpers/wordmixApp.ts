import {makeGraphqlClient} from "~/graphql";
import {GetSettingsDocument, SettingsFragmentFragment} from "~/graphql/build/graphql";
import {GraphqlClient} from "~/graphql/apollo.server";

export type WordmixApp = {
    graphqlClient: GraphqlClient;
    settings: SettingsFragmentFragment | null | undefined;
}

export const makeWordmixApp = async (): Promise<WordmixApp> => {
    const client = makeGraphqlClient();
    const {data} = await client.query({query: GetSettingsDocument});
    return {
        graphqlClient: client,
        settings: data.settings,
    }
}