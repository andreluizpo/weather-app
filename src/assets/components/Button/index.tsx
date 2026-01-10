type ButtonProps = {
    children: React.ReactNode;
} & React.ComponentProps<"button">;

export function Button({ children, ...rest }: ButtonProps) {
    return (
        <button
            className="bg-sky-700 text-neutral-50 p-3 rounded-lg outline-none focus:ring-3 focus:ring-neutral-400/50 hover:brightness-90 transition cursor-pointer"
            {...rest}
        >
            {children}
        </button>
    );
}
