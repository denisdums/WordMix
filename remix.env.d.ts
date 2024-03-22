import "@remix-run/server-runtime";
import {WordmixApp} from "~/helpers/wordmixApp";

declare module "@remix-run/server-runtime" {
    export interface AppLoadContext {
        wordmix: WordmixApp;
    }
}