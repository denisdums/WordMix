import {createContext, useState, useContext, useEffect, useMemo} from 'react'
import {useNavigate} from "react-router";
import qs from 'qs'

export type CollectionFacetsContextType = {
    addFilter: (filter: FacetFilter) => void
    removeFilter: (filter: FacetFilter) => void
    filters: FacetFilter[]
    isActive: (filter: FacetFilter) => boolean
}

let context: CollectionFacetsContextType = {} as CollectionFacetsContextType

export const CollectionFacetsContext = createContext<CollectionFacetsContextType>(context)

export const CollectionFacetsProvider = ({children}: any) => {
    const [filters, setFilters] = useState<FacetFilter[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        const query = qs.parse(window.location.search, {ignoreQueryPrefix: true})
        const filters = Object.entries(query).map(([slug, values]) => {
            return (Array.isArray(values) ? values : [values]).map(value => ({slug, value}))
        }).flat()
        // @ts-ignore
        setFilters(filters)
    }, []);

    const addFilter = (filter: FacetFilter) => {
        setFilters([...filters, filter])
    }

    const removeFilter = (filter: FacetFilter) => {
        setFilters(filters.filter(f => f.slug !== filter.slug || f.value !== filter.value))
    }

    const prepareFilters = (filters: FacetFilter[]) => {
        return filters.reduce((acc, filter) => {
            acc[filter.slug] = acc[filter.slug] || []
            acc[filter.slug].push(filter.value)
            return acc
        }, {} as Record<string, string[]>)
    }

    const isActive = (filter: FacetFilter) => {
        return filters.some(f => f.slug === filter.slug && f.value === filter.value)
    }

    useEffect(() => {
        const baseUri = window.location.pathname

        if (!filters.length) {
            return navigate(baseUri)
        }

        const preparedFilters = prepareFilters(filters)
        const queryFilters = qs.stringify(preparedFilters, {arrayFormat: 'repeat'})
        navigate(baseUri + '?' + queryFilters)
    }, [filters]);

    context = {
        addFilter,
        removeFilter,
        isActive,
        filters
    }

    return (
        <CollectionFacetsContext.Provider value={context}>
            {children}
        </CollectionFacetsContext.Provider>
    )
}

export const useCollectionFacetsContext = () => {
    const context = useContext(CollectionFacetsContext)
    if (!context)
        throw Error('useCollectionFacetsContext must be used inside a `CollectionFacetsProvider`')
    return context
}

export type FacetFilter = {
    type: string
    slug: string
    value: string
}