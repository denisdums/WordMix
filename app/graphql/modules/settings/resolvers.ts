const resolvers = {
    Query: {
        settings: async (_: any, __: any, context: any) => {
            return await context.loaders.settingsLoader.get();
        }
    },

    WordPressSettings: {
        site_logo: async (settings: any, _: any, context: any) => {
            return await context.loaders.mediaLoader.getMediaByID(settings.site_logo)
        },
    }
};

export default resolvers;