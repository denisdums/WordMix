import {ActionFunction} from "@remix-run/node";
import {GetPostPreviewQueryDocument} from "~/graphql/build/graphql";

export const action: ActionFunction = async ({request, context}) => {
    const {wordmix} = context;

    const formData = await request.formData();
    const previewId = formData.get('preview_id');
    const previewNonce = formData.get('preview_nonce');

    if (!previewId || !previewNonce) {
        throw new Response("Preview ID or nonce missing", {status: 405});
    }

    const postData = await wordmix.graphqlClient.query({
        query: GetPostPreviewQueryDocument,
        variables: {
            input: {
                id: parseInt(previewId.toString()),
                nonce: previewNonce.toString()
            },
        }
    });

    return postData.data.getPostPreview;
}