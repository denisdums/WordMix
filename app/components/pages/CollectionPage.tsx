import {BasePostCollectionFragmentFragment} from "~/graphql/build/graphql";
import Pagination from "~/components/molecules/Pagination/Pagination";
import PostCard from "~/components/molecules/PostCard/PostCard";
import CheckboxFacet from "~/components/molecules/CheckboxFacet/CheckboxFacet";
import {CollectionFacetsProvider} from "~/providers/CollectionFacetsProvider";

export type CollectionPageProps = {
    collection: BasePostCollectionFragmentFragment;
};

export default function CollectionPage(props: CollectionPageProps) {
    return (
        <div className="max-w-5xl mx-auto pb-10">
            <div className="grid grid-cols-4 gap-10">
                <div className="flex flex-col gap-8">
                    <CollectionFacetsProvider>
                        {props.collection.facets?.map((facet, index) => (
                            <>
                                {facet && <CheckboxFacet facet={facet} key={index}/>}
                            </>
                        ))}
                    </CollectionFacetsProvider>
                </div>
                <div className="col-span-3 flex flex-col gap-6">
                    <div>
                        {!!props.collection.total_posts && (
                            <div className="text-sm">
                                {props.collection.total_posts} articles trouvés
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-12">
                        <div className="grid grid-cols-3 gap-12">
                            {props.collection?.posts?.map((post, index) => (
                                <PostCard post={post} key={index}/>
                            ))}
                        </div>
                        <Pagination collection={props.collection} basePath="/posts"/>
                    </div>
                </div>
            </div>
        </div>
    );
}