export function Footer() {
    return (
        <footer className="mt-5 text-center text-neutral-500">
            <span>
                © {new Date().getFullYear()} — Desenvolvido por{" "}
                <a className="hover:underline transition" href="https://github.com/andreluizpo/to-do-list">
                    André Luiz
                </a>
                .
            </span>
        </footer>
    );
}
