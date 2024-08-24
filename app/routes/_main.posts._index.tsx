import {LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {GetPostCollectionQueryDocument} from "~/graphql/build/graphql";
import CollectionPage from "~/components/pages/CollectionPage";
import {Response} from "@remix-run/web-fetch";
import {parseFacetsFromRequest} from "~/helpers/wordmixApp";

export const meta: MetaFunction = ({data}: any) => {
    return [
        {title: data.settings?.title},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export async function loader({context, request}: LoaderFunctionArgs) {
    const {wordmix} = context
    const collectionData = await wordmix.graphqlClient.query({
        query: GetPostCollectionQueryDocument,
        variables: {
            input: parseFacetsFromRequest(request),
        },
    });

    if (!collectionData.data.getPostCollection) {
        return new Response("Not Found", {status: 404});
    }

    return {settings: wordmix.settings, collection: collectionData.data.getPostCollection};
}

export default function Index() {
    const {collection} = useLoaderData<typeof loader>();
    return <CollectionPage collection={collection}/>;
}