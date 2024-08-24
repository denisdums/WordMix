import resolvers from "./resolvers";
import {makeWordpressAxiosInstance} from "~/graphql";
import {MenuLoader} from "~/graphql/modules/menus/loaders/MenuLoader";
import {MediaLoader} from "~/graphql/modules/medias/loaders/MediaLoader";

const module = {
    resolvers,
    enhanceContext: (previousContext: any) => {
        const axiosInstance = makeWordpressAxiosInstance();

        return {
            ...previousContext,
            loaders: {
                ...previousContext.loaders,
                menuLoader: new MenuLoader(axiosInstance),
            }
        }
    }
};

export default module;