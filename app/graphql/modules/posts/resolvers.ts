import {GetPostCollectionInput} from "~/graphql/build/graphql";

const resolvers = {
    Query: {
        getPostCollection: async (_: any, {input}: { input: GetPostCollectionInput }, context: any) => {
            return await context.loaders.postLoader.getCollection(input);
        },
        getPostBySlug: async (_: any, {slug}: any, context: any) => {
            return await context.loaders.postLoader.get({slug});
        },
        getPostByID: async (_: any, {id}: any, context: any) => {
            return await context.loaders.postLoader.getById(id);
        },
        getPostPreview: async (_: any, {input}: any, context: any) => {
            return await context.loaders.postLoader.getPreview(input);
        },
        getPostCollectionFacets: async (_: any, {post_types}: any, context: any) => {
            return await context.loaders.postLoader.getCollectionFacets(post_types);
        }
    },

    Post: {
        title: (post: any) => post.title.rendered,
        content: (post: any) => post.content.rendered,
        excerpt: (post: any) => post.excerpt.rendered,
        featured_media: async (post: any, _: any, context: any) => {
            if (!post.featured_media) return null;
            const media = await context.loaders.mediaLoader.getMediaByID(post.featured_media)
            return media ?? null;
        },
        permalink: (post: any) => '/post/' + post.slug,
    },

    PostCollection: {
        facets: async ({post_types}: any, _:any, context:any) => {
            return await context.loaders.postLoader.getCollectionFacets(post_types);
        }
    }
};

export default resolvers;