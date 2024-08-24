const resolvers = {
    Query: {
        getMediaByID: async (_: any, {name}: any, context: any) => {
            return await context.loaders.mediaLoader.getMediaByID(name);
        }
    },

    WordPressMedia: {
        guid: (media: any) => media.guid.rendered,
        title: (media: any) => media.title.rendered,
        description: (media: any) => media.description.rendered,
        caption: (media: any) => media.caption.rendered,
    }
};

export default resolvers;