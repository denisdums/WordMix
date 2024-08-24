import "nprogress/nprogress.css";
import NProgress from "nprogress";
import {useEffect} from "react";

export function usePageProgress(loading: boolean) {
    useEffect(() => {
        if (loading) {
            if (NProgress.status === null) {
                NProgress.start();
            }
        } else {
            NProgress.done();
        }
    }, [loading]);

    return NProgress;
}