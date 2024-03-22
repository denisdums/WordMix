import Settings from "./settings";
import Posts from "./posts";
import Pages from "./pages";
import Menus from "./menus";
import Medias from "./medias";

const modules: GraphqlModule[] = [Medias, Settings, Posts, Pages, Menus]

export default modules

export type GraphqlModule = {
    resolvers: any,
    enhanceContext?: (previousContext: any) => any
}