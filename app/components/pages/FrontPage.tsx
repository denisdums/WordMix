import TheContent from "~/components/atoms/TheContent/TheContent";
import {BasePostFragmentFragment} from "~/graphql/build/graphql";

export type FrontPageProps = {
    page: BasePostFragmentFragment;
};

export default function FrontPage(props: FrontPageProps) {
    return (
        <div className="flex flex-col gap-10 py-10 items-center">
            <h1>{props.page.title}</h1>
            {props.page.content && <TheContent content={props.page.content}/>}
        </div>
    );
}