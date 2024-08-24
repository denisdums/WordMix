import resolvers from "./resolvers";
import {makeWordpressAxiosInstance} from "~/graphql";
import {PageLoader} from "~/graphql/modules/pages/loaders/PageLoader";
import {MenuLoader} from "~/graphql/modules/menus/loaders/MenuLoader";

const module = {
    resolvers,
    enhanceContext: (previousContext: any) => {
        const axiosInstance = makeWordpressAxiosInstance();

        return {
            ...previousContext,
            loaders: {
                ...previousContext.loaders,
                pageLoader: new PageLoader(axiosInstance),
            }
        }
    }
};

export default module;