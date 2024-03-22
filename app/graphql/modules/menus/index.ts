import resolvers from "./resolvers";
import {makeWordpressAxiosInstance} from "~/graphql";
import {MenuLoader} from "~/graphql/modules/menus/loaders/MenuLoader";

const module = {
    resolvers,
    enhanceContext: (previousContext: any) => {
        const axiosInstance = makeWordpressAxiosInstance();
        return {
            ...previousContext,
            menuLoader: new MenuLoader(axiosInstance),
        }
    }
};

export default module;