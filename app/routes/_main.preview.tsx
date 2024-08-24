import {json, LoaderFunction, MetaFunction} from "@remix-run/node";
import {useLoaderData, useRevalidator} from "@remix-run/react";
import {BasePostPageFragmentFragment, GetPostPreviewQueryDocument} from "~/graphql/build/graphql";
import PreviewPage from "~/components/pages/PreviewPage";

export const meta: MetaFunction = ({data}: any) => {
    return [
        {title: 'Preview'},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export const loader: LoaderFunction = async ({context, request}) => {
    const {searchParams} = new URL(request.url);
    const previewId = searchParams.get('preview_id');
    const previewNonce = searchParams.get('preview_nonce');

    if (!previewId || !previewNonce) {
        throw new Response("Preview ID or nonce missing", {status: 405});
    }

    return json({id: previewId, nonce: previewNonce});
}

export default function Index() {
    const {id, nonce} = useLoaderData<typeof loader>();

    return <PreviewPage id={id} nonce={nonce}/>
}