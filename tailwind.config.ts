// @ts-ignore
import themeJson from "@_tw/themejson";
import themeConfig from "./app/config/theme.json"
import type {Config} from 'tailwindcss'

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        themeJson(themeConfig),
    ],
} satisfies Config

