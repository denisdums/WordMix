import {makeGraphqlClient} from "~/graphql";
import {GetPostCollectionInput, GetSettingsDocument, SettingsFragmentFragment} from "~/graphql/build/graphql";
import {GraphqlClient} from "~/graphql/apollo.server";
import qs from "qs";

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

export const parseFacetsFromRequest = (request: Request): GetPostCollectionInput => {
    const query = qs.parse(request.url.split('?')[1]);

    return {
        // @ts-ignore
        categories: parseFacetsValues(query.category)?.join(','),
        // @ts-ignore
        tags: parseFacetsValues(query.post_tag)?.join(','),
        page: query.page ? parseInt(query.page as string) : 1,
    } as GetPostCollectionInput
}

export const parseFacetsValues = (facets: string | string[] | null): string[] | null => {
    if (!facets) return null;
    return Array.isArray(facets) ? facets : [facets];
}