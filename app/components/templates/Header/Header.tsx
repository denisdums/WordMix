import {BaseMediaFragmentFragment, MenuFragmentFragment} from "~/graphql/build/graphql";
import {Link} from "@remix-run/react";

export type HeaderProps = {
    menu: MenuFragmentFragment
    siteLogo: BaseMediaFragmentFragment
}

export default function Header(props: HeaderProps) {
    return (
        <header className="bg-white sticky top-0 z-50">
            <div className="max-w-5xl mx-auto py-6 flex items-center justify-between">
                <Link to="/" className="h-12">
                    {props.siteLogo &&
                        <img src={props.siteLogo.source_url} alt={props.siteLogo.alt_text} className='h-full'/>
                    }
                </Link>
                <nav>
                    <ul className="flex items-center justify-end gap-4 list-none">
                        {props.menu?.items?.map((item) => (
                            <li key={item.id}>
                                <Link to={item.url} className="no-underline hover:underline">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}