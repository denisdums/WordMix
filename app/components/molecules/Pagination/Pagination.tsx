import {BasePostCollectionFragmentFragment} from "~/graphql/build/graphql";
import PaginationPrevious from "~/components/molecules/Pagination/PaginationPrevious/PaginationPrevious";
import PaginationNext from "~/components/molecules/Pagination/PaginationNext/PaginationNext";
import PaginationItem from "~/components/molecules/Pagination/PaginationItem/PaginationItem";

export type PaginationProps = {
    collection: BasePostCollectionFragmentFragment
    basePath: string
}

export default function Pagination(props: PaginationProps) {
    return (
        <div className="py-4">
            {props.collection.total_pages > 1 && (
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <PaginationPrevious basePath={props.basePath} collection={props.collection}/>
                    {Array.from({length: props.collection.total_pages}, (_, i) => (
                        <PaginationItem basePath={props.basePath} number={i + 1} collection={props.collection} key={i}/>
                    ))}
                    <PaginationNext basePath={props.basePath} collection={props.collection}/>
                </div>
            )}
        </div>
    );
}