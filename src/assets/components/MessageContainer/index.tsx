import { CloudAlertIcon, Loader2Icon } from "lucide-react";

type MessageContainerProps = {
    type: "Error" | "Loading";
    message: string;
};

export function MessageContainer({ type, message }: MessageContainerProps) {
    const messageIcon =
        type == "Error" ? <CloudAlertIcon size={50} /> : <Loader2Icon className="animate-spin" size={50} />;

    return (
        <div className="flex flex-col gap-2 items-center md:col-span-3 my-10">
            {messageIcon}
            <p>{message}</p>
        </div>
    );
}
