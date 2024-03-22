import parse from 'html-react-parser';

export type TheContentProps = {
    content: string;
};

export default function TheContent(props: TheContentProps) {
    return (
        <div className="the-content">
            {parse(props.content)}
        </div>
    );
}