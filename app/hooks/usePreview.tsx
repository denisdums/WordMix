import {useFetcher} from "@remix-run/react";
import {useEffect} from "react";

export type usePreviewProps = {
    id: string
    nonce: string
}

export default function usePreview({id, nonce}: usePreviewProps) : {preview: any} {
    const fetcher = useFetcher();

    useEffect(() => {
        const formData = new FormData();
        formData.set('preview_id', id);
        formData.set('preview_nonce', nonce);

        fetchPreview(formData);

        const interval = setInterval(() => {
            fetchPreview(formData);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const fetchPreview = (formData: FormData) => {
        fetcher.submit(formData, {
            action: '/api/preview',
            method: 'post',
        });
    }

    return {
        preview: fetcher.data,
    };
}