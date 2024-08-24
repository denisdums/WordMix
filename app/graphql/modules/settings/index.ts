import resolvers from "./resolvers";
import {makeWordpressAxiosInstance} from "~/graphql";
import {SettingsLoader} from "~/graphql/modules/settings/loaders/SettingsLoader";
import process from "process";
import {PostLoader} from "~/graphql/modules/posts/loaders/PostLoader";

const module = {
    resolvers,
    enhanceContext: (previousContext: any) => {
        const axiosInstance = makeWordpressAxiosInstance();

        return {
            ...previousContext,
            loaders: {
                ...previousContext.loaders,
                settingsLoader: new SettingsLoader(axiosInstance),
            }
        }
    }
};

export default module;