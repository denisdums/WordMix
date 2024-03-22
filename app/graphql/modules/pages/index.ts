import resolvers from "./resolvers";
import {makeWordpressAxiosInstance} from "~/graphql";
import {PageLoader} from "~/graphql/modules/pages/loaders/PageLoader";

const module = {
    resolvers,
    enhanceContext: (previousContext: any) => {
        const axiosInstance = makeWordpressAxiosInstance();
        return {
            ...previousContext,
            pageLoader: new PageLoader(axiosInstance),
        }
    }
};

export default module;