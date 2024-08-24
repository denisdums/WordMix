const resolvers = {
    Query: {
        frontPage: async (_: any, __: any, context: any) => {
            const settings = await context.loaders.settingsLoader.get();
            return await context.loaders.pageLoader.getPage(settings.page_on_front);
        }
    },
};

export default resolvers;