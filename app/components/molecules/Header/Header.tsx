import {BaseMediaFragmentFragment, MenuFragmentFragment} from "~/graphql/build/graphql";
import {Link} from "@remix-run/react";

export type HeaderProps = {
    menu: MenuFragmentFragment
    siteLogo: BaseMediaFragmentFragment
}

export default function Header(props: HeaderProps) {
    return (
        <header className="max-w-5xl mx-auto py-8 flex items-center justify-between">
            <div className="h-12">
                <img src={props.siteLogo.source_url} alt={props.siteLogo.alt_text} className='h-full'/>
            </div>
            <nav>
                <ul className="flex items-center justify-end gap-4">
                {props.menu?.items?.map((item) => (
                        <li key={item.id}>
                            <Link to={item.url} className="hover:underline">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}