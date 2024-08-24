import {LoaderFunction, MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {
    GetPostBySlugQueryDocument,
    BasePostPageFragmentFragment
} from "~/graphql/build/graphql";
import PostPage from "~/components/pages/PostPage";

export const meta: MetaFunction = ({data}: any) => {
    return [
        {title: data.settings?.title},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export const loader: LoaderFunction = async ({context, params}): Promise<{
    settings: any,
    post: BasePostPageFragmentFragment | undefined | null
}> => {
    const {wordmix} = context;
    if (!params.slug) {
        throw new Response("Not Found", {status: 404})
    }

    const postData = await wordmix.graphqlClient.query({
        query: GetPostBySlugQueryDocument,
        variables: {
            slug: params.slug,
        }
    });

    if (!postData.data.getPostBySlug) {
        throw new Response("Not Found", {status: 404});
    }

    return {settings: wordmix.settings, post: postData.data.getPostBySlug};
}

export default function Index() {
    const {post} = useLoaderData<typeof loader>();
    return <PostPage post={post}/>;
}