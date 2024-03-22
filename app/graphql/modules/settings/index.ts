import resolvers from "./resolvers";
import {makeWordpressAxiosInstance} from "~/graphql";
import {SettingsLoader} from "~/graphql/modules/settings/loaders/SettingsLoader";
import process from "process";

const module = {
    resolvers,
    enhanceContext: (previousContext: any) => {
        const axiosInstance = makeWordpressAxiosInstance();
        return {
            ...previousContext,
            settingsLoader: new SettingsLoader(axiosInstance),
        }
    }
};

export default module;