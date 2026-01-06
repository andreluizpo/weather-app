export function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center">
            <div className="m-5 w-full max-w-2xl">{children}</div>
        </div>
    );
}
