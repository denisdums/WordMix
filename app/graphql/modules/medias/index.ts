import resolvers from "./resolvers";
import {makeWordpressAxiosInstance} from "~/graphql";
import {MediaLoader} from "~/graphql/modules/medias/loaders/MediaLoader";

const module = {
    resolvers,
    enhanceContext: (previousContext: any) => {
        const axiosInstance = makeWordpressAxiosInstance();
        return {
            ...previousContext,
            mediaLoader: new MediaLoader(axiosInstance),
        }
    }
};

export default module;