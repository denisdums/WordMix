import usePreview from "~/hooks/usePreview";
import TheContent from "~/components/atoms/TheContent/TheContent";

export type PreviewPageProps = {
    id: string
    nonce: string
}
export default function PreviewPage(props: PreviewPageProps) {
    const {preview} = usePreview(props);

    if (!preview?.content) return null;

    return <TheContent content={preview.content}/>
}
