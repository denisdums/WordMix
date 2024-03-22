const resolvers = {
    Query: {
        posts: async (_: any, __: any, context: any) => {
            return await context.postLoader.getPosts();
        }
    },

    WordPressPost: {
        title: (post: any) => post.title.rendered,
        content: (post: any) => post.content.rendered,
        excerpt: (post: any) => post.excerpt.rendered,
    }
};

export default resolvers;