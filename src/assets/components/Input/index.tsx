export function Input({ ...rest }: React.ComponentProps<"input">) {
    return (
        <>
            <input
                className="w-full px-3 py-2 border border-neutral-200 rounded-lg outline-none focus:ring-3 focus:ring-neutral-400/50 focus:border-neutral-400 transition"
                type="text"
                {...rest}
            />
        </>
    );
}
