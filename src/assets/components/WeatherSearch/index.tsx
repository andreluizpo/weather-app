import { MoonIcon, SearchIcon, SunIcon } from "lucide-react";
import { Button } from "../Button";
import { Input } from "../Input";
import { useEffect, useRef, useState } from "react";
import { useWeather } from "../../../contexts/useWeatherContext";

type AvailableThemes = "dark" | "light";

export function WeatherSearch() {
    const { fetchWeather } = useWeather();
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = (localStorage.getItem("theme") as AvailableThemes) || "dark";
        return storageTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon size={16} />,
        light: <MoonIcon size={16} />,
    };

    const cityNameInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        document.documentElement.setAttribute("class", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const standardCity = "São Paulo";
        fetchWeather(standardCity);
    }, []);

    function handleSearchCity(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (cityNameInput.current === null) return;

        const cityName = cityNameInput.current.value.trim();

        fetchWeather(cityName);

        cityNameInput.current.value = "";
    }

    function handleThemeChange() {
        setTheme((prevTheme) => {
            const nextTheme = prevTheme === "dark" ? "light" : "dark";
            return nextTheme;
        });
    }

    return (
        <form onSubmit={handleSearchCity}>
            <div className="flex gap-2">
                <Input placeholder="Pesquisar" ref={cityNameInput} required />
                <Button type="submit" aria-label="Pesquisar cidade" title="Pesquisar cidade">
                    <SearchIcon size={16} />
                </Button>
                <Button type="button" aria-label="Alterar tema" title="Alterar tema" onClick={handleThemeChange}>
                    {nextThemeIcon[theme]}
                </Button>
            </div>
        </form>
    );
}
