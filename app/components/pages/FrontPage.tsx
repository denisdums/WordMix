import TheContent from "~/components/atoms/TheContent/TheContent";
import {BasePostPageFragmentFragment} from "~/graphql/build/graphql";

export type FrontPageProps = {
    page: BasePostPageFragmentFragment;
};

export default function FrontPage(props: FrontPageProps) {
    return (
        <>
            {props.page.content && <TheContent content={props.page.content}/>}
        </>
    );
}