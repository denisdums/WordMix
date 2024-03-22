import {AxiosError, AxiosInstance} from "axios";


export type SettingsRestResponse = {
    title: string,
    description: string,
    url: string,
    email: string,
    timezone: string,
    date_format: string,
    time_format: string,
    start_of_week: number,
    language: string,
    use_smilies: boolean,
    default_category: number,
    default_post_format: string,
    posts_per_page: number,
    show_on_front: string,
    page_on_front: number,
    page_for_posts: number,
    default_ping_status: string,
    default_comment_status: string,
    site_logo: number,
    site_icon: number,

}

export class SettingsLoader {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    async get(): Promise<SettingsRestResponse | null>{
        try {
            const response = await this.axios.get('/settings');
            return response.data;
        } catch (e) {
            const error = e as AxiosError
            console.error('error', error.message);
            return null;
        }
    }
}