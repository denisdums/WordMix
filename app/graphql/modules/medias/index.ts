import resolvers from "./resolvers";
import {makeWordpressAxiosInstance} from "~/graphql";
import {MediaLoader} from "~/graphql/modules/medias/loaders/MediaLoader";
import {PostLoader} from "~/graphql/modules/posts/loaders/PostLoader";

const module = {
    resolvers,
    enhanceContext: (previousContext: any) => {
        const axiosInstance = makeWordpressAxiosInstance();

        return {
            ...previousContext,
            loaders: {
                ...previousContext.loaders,
                mediaLoader: new MediaLoader(axiosInstance),
            }
        }
    }
};

export default module;