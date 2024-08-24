import {FacetsListFragmentFragment} from "~/graphql/build/graphql";
import CheckboxFacetItem from "~/components/molecules/CheckboxFacet/CheckboxFacetItem";

export type CheckboxFacetProps = {
    facet: FacetsListFragmentFragment;
}

export default function CheckboxFacet({facet}: CheckboxFacetProps) {

    if (!facet.values?.length) return null;

    return (
        <div className="flex flex-col gap-2">
            <h3>{facet?.label}</h3>
            <ul className="pl-4">
                {facet?.values?.map((value:any, index:any) =>
                    <CheckboxFacetItem facet={facet} value={value} key={index}/>
                )}
            </ul>
        </div>
    )
}