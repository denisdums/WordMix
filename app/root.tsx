import {Links, Meta, Outlet, Scripts, ScrollRestoration, useNavigation} from "@remix-run/react";
import {LinksFunction} from "@remix-run/node";

import AppStyle from "~/styles/app.css?url";
import TailwindStyle from "~/styles/tailwind.css?url";
import WordPressStyle from "~/styles/wordpress.css?url";
import {usePageProgress} from "~/hooks/usePageProgress";

export const links: LinksFunction = () => [
    {rel: "stylesheet", href: TailwindStyle},
    {rel: "stylesheet", href: WordPressStyle},
    {rel: "stylesheet", href: AppStyle},
    {rel: "stylesheet", href: "http://wordmix.docker/expose/head-styles.css"},
];

export function Layout({children}: { children: React.ReactNode }) {

    F

    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body>
        {children}
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function App() {
    return <Outlet/>;
}
