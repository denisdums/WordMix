import {AxiosInstance} from "axios";

export class MediaLoader {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    async getMediaByID(id: string) {
        try {
            const response = await this.axios.get('/media/' + id);
            return response.data;
        } catch (e) {
            console.error('error', e);
            return [];
        }
    }
}