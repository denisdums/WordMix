import resolvers from "./resolvers";
import {PostLoader} from "~/graphql/modules/posts/loaders/PostLoader";
import {makeWordpressAxiosInstance} from "~/graphql";

const module = {
    resolvers,
    enhanceContext: (previousContext: any) => {
        const axiosInstance = makeWordpressAxiosInstance();
        return {
            ...previousContext,
            loaders: {
                ...previousContext.loaders,
                postLoader: new PostLoader(axiosInstance),
            }
        }
    }
};

export default module;