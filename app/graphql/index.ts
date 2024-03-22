import axios from "axios";
import {GraphqlClient} from "~/graphql/apollo.server";

export const makeGraphqlClient = () => {
    return new GraphqlClient();
}

export function makeWordpressAxiosInstance() {
    const basicAuth = Buffer.from(`${process.env.WORDPRESS_USER}:${process.env.WORDPRESS_PASSWORD}`).toString('base64');
    return axios.create({
        baseURL: process.env.WORDPRESS_URL + "/wp-json/wp/v2",
        headers: {
            'Authorization': 'Basic ' + basicAuth,
        }
    })
}