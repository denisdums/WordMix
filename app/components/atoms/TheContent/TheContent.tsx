import parse from 'html-react-parser';

export type TheContentProps = {
    content: string;
};

export default function TheContent(props: TheContentProps) {
    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
            {parse(props.content)}
        </div>
    );
}