import {BasePostCardFragmentFragment} from "~/graphql/build/graphql";
import {Link} from "@remix-run/react";

export type PostCardProps = {
    post: BasePostCardFragmentFragment
}
export default function PostCard(props: PostCardProps) {
    return (
        <article className="p-4 bg-gray-50 relative hover:shadow-md transition-all rounded border-solid border border-gray-300">
            <div className="flex flex-col gap-4">
                <div className="h-48">
                    <img src={props.post.featured_media?.source_url}
                         alt={props.post.title ?? ''}
                         className="w-full h-full object-center object-cover"/>
                </div>
                <div>
                    <Link to={props.post.permalink}
                          className="after:block after:absolute after:h-full after:w-full after:top-0 after:left-0"/>
                    <h1 className='text-xl line-clamp-1'>{props.post.title}</h1>
                    <p className="line-clamp-2" dangerouslySetInnerHTML={{__html: props.post.excerpt ?? ''}}></p>
                </div>
            </div>
        </article>
    );
}