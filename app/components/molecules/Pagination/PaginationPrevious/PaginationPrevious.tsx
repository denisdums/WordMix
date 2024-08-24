import {Link} from "@remix-run/react";
import {BasePostCollectionFragmentFragment} from "~/graphql/build/graphql";

export  type PaginationPreviousProps = {
    basePath: string
    collection: BasePostCollectionFragmentFragment
}

export default function PaginationPrevious(props: PaginationPreviousProps) {
    const previousPage = props.collection.current_page - 1;

    if (previousPage === 0) return null;

    const link = previousPage > 1 ? `${props.basePath}/page/${previousPage}` : props.basePath;

    return (
        <Link to={link}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 no-underline">
            Prev
        </Link>
    );
}