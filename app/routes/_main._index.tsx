import {LoaderFunction, MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import FrontPage from "~/components/pages/FrontPage";
import {FrontPageQueryDocument} from "~/graphql/build/graphql";

export const meta: MetaFunction = ({data}: any) => {
    return [
        {title: data.settings.title + ' | ' + data.page.title},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export const loader: LoaderFunction = async ({context}): Promise<{ settings: any, page: any }> => {
    const {wordmix} = context;
    const {data} = await wordmix.graphqlClient.query({query: FrontPageQueryDocument});
    return {settings: wordmix.settings, page: data.frontPage};
}

export default function Index() {
    const {page} = useLoaderData<typeof loader>();
    return <FrontPage page={page}/>;
}