import {BasePostPageFragmentFragment} from "~/graphql/build/graphql";
import TheContent from "~/components/atoms/TheContent/TheContent";

export type PostPageProps = {
    post: BasePostPageFragmentFragment;
};

export default function PostPage(props: PostPageProps) {
    return (
        <div className="py-12">
            <TheContent content={props.post.content ?? ''}/>
        </div>
    );
}