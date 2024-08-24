const resolvers = {
    Query: {
        getMenuByName: async (_: any, {name}: any, context: any) => {
            return await context.loaders.menuLoader.getMenuByName(name);
        }
    },

    WordPressMenu: {
        items: async (menu: any, _: any, context: any) => {
            return await context.loaders.menuLoader.getMenuItemsByMenuID(menu.id);
        }
    },

    WordPressMenuItem: {
        title: (menuItem: any) => menuItem.title.rendered,
    }
};

export default resolvers;