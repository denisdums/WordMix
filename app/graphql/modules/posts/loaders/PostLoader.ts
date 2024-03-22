import {AxiosInstance} from "axios";

export class PostLoader {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    async getPosts() {
        try {
            const response = await this.axios.get('/posts');
            return response.data;
        }
        catch (e) {
            console.error('error', e);
            return [];
        }
    }
}