import {Links, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react";
import {LinksFunction} from "@remix-run/node";

import CommonBuildStyle from "@wordpress/block-library/build-style/common.css?url"
import StyleBuildStyle from "@wordpress/block-library/build-style/style.css?url"
import ThemeBuildStyle from "@wordpress/block-library/build-style/theme.css?url"
import TailwindStyle from "~/styles/tailwind.css?url";
import BlocksStyle from "~/styles/blocks.css?url";

export const links: LinksFunction = () => [
    {rel: "stylesheet", href: CommonBuildStyle},
    {rel: "stylesheet", href: StyleBuildStyle},
    {rel: "stylesheet", href: ThemeBuildStyle},
    {rel: "stylesheet", href: TailwindStyle},
    {rel: "stylesheet", href: BlocksStyle},
];

export function Layout({children}: { children: React.ReactNode }) {
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
