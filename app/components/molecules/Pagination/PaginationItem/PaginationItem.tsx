import {Link, useLocation} from "@remix-run/react";
import {BasePostCollectionFragmentFragment} from "~/graphql/build/graphql";
import classNames from "classnames";

export  type PaginationItemProps = {
    basePath: string
    number: number
    collection: BasePostCollectionFragmentFragment
}

export default function PaginationItem(props: PaginationItemProps) {
    const isActive = props.collection.current_page === props.number;
    const location = useLocation();
    const search = new URLSearchParams(location.search);
    search.set('page', props.number.toString());
    const link = `${props.basePath}/?${search.toString()}`;

    return (
        <Link to={link} className={classNames("px-4 py-2 bg-gray-200 hover:bg-gray-300 no-underline", {
            '!bg-gray-800 text-white': isActive
        })}>
            {props.number}
        </Link>
    );
}