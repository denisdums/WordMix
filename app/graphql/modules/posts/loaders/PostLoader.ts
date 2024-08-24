import {AxiosHeaders, AxiosInstance} from "axios";
import {GetPostCollectionInput, PostInput, PostPreviewInput} from "~/graphql/build/graphql";

export class PostLoader {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    async get(input: PostInput) {
        try {
            const response = await this.axios.get('/posts', {params: input});
            return response.data.length > 0 ? response.data[0] : null;
        } catch (e) {
            console.error('error', e);
            return null;
        }
    }

    async getById(id: number) {
        try {
            const response = await this.axios.get('/posts/' + id);
            return response.data ?? null;
        } catch (e) {
            console.error('error', e);
            return null;
        }
    }

    async getPreview(input: PostPreviewInput) {
        try {
            const response = await this.axios.get('/posts/' + input.id + '/revisions');
            return response.data[0] ?? null;
        } catch (e) {
            console.error('error', e);
            return null;
        }
    }

    async getCollection(input: GetPostCollectionInput) {
        try {
            console.log('input', input)
            const response = await this.axios.get('/posts', {params: input});
            const headers = response.headers as AxiosHeaders;
            const total = headers.get('x-wp-total') as string
            const totalPages = headers.get('x-wp-totalpages') as string
            const perPage = headers.get('x-wp-perpage') as string

            return {
                posts: response.data,
                post_types: ['post'],
                current_page: input?.page ?? 1,
                total_pages: parseInt(totalPages),
                total_posts: parseInt(total),
                per_page: perPage
            };
        } catch (e) {
            console.error('error', e);
            return null;
        }
    }

    async getCollectionFacets(post_types: string[]) {
        try {
            const response = await this.axios.get('/posts/facets', {params: {post_types}});
            return response.data;
        } catch (e) {
            console.error('error', e);
            return null;
        }
    }
}