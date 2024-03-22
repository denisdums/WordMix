import {AxiosInstance} from "axios";

export class PageLoader {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    async getPage(id: number) {
        try {
            const response = await this.axios.get('/pages/'+id);
            return response.data;
        }
        catch (e) {
            console.error('error', e);
            return [];
        }
    }
}