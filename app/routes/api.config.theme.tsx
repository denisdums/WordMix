import {LoaderFunction} from "@remix-run/node";
import themeConfig from "~/config/theme.json";

export const loader: LoaderFunction = async () => {
    try {
        return new Response(JSON.stringify(themeConfig), {
            headers: {'Content-Type': 'application/json'}
        });
    } catch (error) {
        console.error('Erreur lors de la lecture du fichier JSON :', error);
        return new Response('Erreur lors de la lecture du fichier JSON', {status: 500});
    }
};
