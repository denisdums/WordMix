import {AxiosInstance} from "axios";

export class MenuLoader {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    async getMenuByName(name: string) {
        try {
            const response = await this.axios.get('/menus?search=' + name);
            return response.data[0] ?? null;
        } catch (e) {
            console.error('error', e);
            return [];
        }
    }

    async getMenuItemsByMenuID(id: string) {
        try {
            const response = await this.axios.get('menu-items?menus=' + id);
            return response.data;
        } catch (e) {
            console.error('error', e);
            return [];
        }
    }
}