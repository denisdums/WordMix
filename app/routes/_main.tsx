import {Outlet, useLoaderData} from "@remix-run/react";
import {LoaderFunction} from "@remix-run/node";
import {MenuQueryByNameDocument} from "~/graphql/build/graphql";
import Header from "~/components/templates/Header/Header";
import Footer from "~/components/templates/Footer/Footer";


export const loader: LoaderFunction = async ({context}) => {
    const {wordmix} = context;

    const headerData = await wordmix.graphqlClient.query({query: MenuQueryByNameDocument, variables: {name: 'Header'}});
    const footerData = await wordmix.graphqlClient.query({query: MenuQueryByNameDocument, variables: {name: 'Footer'}});
    const siteLogo = wordmix.settings?.site_logo

    return {
        header: headerData.data.getMenuByName,
        footer: footerData.data.getMenuByName,
        siteLogo
    };
}

export default function Index() {
    const {header, footer, siteLogo} = useLoaderData<typeof loader>();
    return (
        <>
            <Header menu={header} siteLogo={siteLogo}/>
            <main>
                <Outlet/>
            </main>
            <Footer menu={footer} siteLogo={siteLogo}/>
        </>
    )
}
