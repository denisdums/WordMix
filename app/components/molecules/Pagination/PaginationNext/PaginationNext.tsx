import {Link} from "@remix-run/react";
import {BasePostCollectionFragmentFragment} from "~/graphql/build/graphql";

export  type PaginationNextProps = {
    basePath: string
    collection: BasePostCollectionFragmentFragment
}

export default function PaginationNext(props: PaginationNextProps) {
    const nextPage = props.collection.current_page + 1;

    if (nextPage > props.collection.total_pages) return null;

    const link = `${props.basePath}/page/${nextPage}`;

    return (
        <Link to={link}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 no-underline">
            Next
        </Link>
    );
}