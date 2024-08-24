import {FacetsListFragmentFragment, PostCollectionFacetValueFragmentFragment} from "~/graphql/build/graphql";
import {useCollectionFacetsContext} from "~/providers/CollectionFacetsProvider";

export type CheckboxFacetProps = {
    facet: FacetsListFragmentFragment;
    value: PostCollectionFacetValueFragmentFragment;
}

export default function CheckboxFacetItem({facet, value}: CheckboxFacetProps) {
    const {addFilter, removeFilter, isActive} = useCollectionFacetsContext()

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = event.target
        if (checked) {
            addFilter({type: facet?.type ?? '', slug: facet?.slug ?? '', value})
        } else {
            removeFilter({type: facet?.type ?? '', slug: facet?.slug ?? '', value})
        }
    }

    return (
        <li className="list-none flex items-center gap-2">
            <input type="checkbox" id={value?.value ?? ''}
                   value={value?.value ?? ''}
                   className="accent-black cursor-pointer"
                   checked={isActive({
                       type: facet?.type ?? '',
                       slug: facet?.slug ?? '',
                       value: value.value ?? ''
                   })}
                   onChange={onChange}/>
            <label htmlFor={value?.value ?? ''} className="cursor-pointer">{value?.name}</label>
        </li>
    )
}