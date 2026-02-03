export function Footer() {
    return (
        <footer className="mt-5 text-center text-[14px] text-neutral-500">
            <span>
                © {new Date().getFullYear()} — Desenvolvido por{" "}
                <a className="hover:underline" href="https://github.com/andreluizpo" target="_blank">
                    André Luiz
                </a>
                . Dados fornecidos por{" "}
                <a className="hover:underline" href="https://openweathermap.org/" target="_blank">
                    OpenWeather
                </a>
            </span>
        </footer>
    );
}
