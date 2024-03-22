const resolvers = {
    Query: {
        frontPage: async (_: any, __: any, context: any) => {
            const settings = await context.settingsLoader.get();
            return await context.pageLoader.getPage(settings.page_on_front);
        }
    },
};

export default resolvers;