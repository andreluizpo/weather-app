import { MoonIcon, SearchIcon, SunIcon } from "lucide-react";
import { Button } from "../Button";
import { Input } from "../Input";
import { useEffect, useRef, useState } from "react";
import { useWeather } from "../../../contexts/useWeatherContext";
import clsx from "clsx";

type AvailableThemes = "dark" | "light";

type CityType = {
    name: string;
    lat: number;
    lon: number;
    country: string;
    state?: string;
};

export function WeatherSearch() {
    const { fetchWeather } = useWeather();
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = (localStorage.getItem("theme") as AvailableThemes) || "dark";
        return storageTheme;
    });

    const [searchCity, setSearchCity] = useState("");
    const [suggestions, setSuggestions] = useState<CityType[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [loading, setLoading] = useState(false);
    const searchContainerRef = useRef<HTMLInputElement>(null);

    const nextThemeIcon = {
        dark: <SunIcon size={16} />,
        light: <MoonIcon size={16} />,
    };

    useEffect(() => {
        document.documentElement.setAttribute("class", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        // São Paulo - SP
        fetchWeather(-23.5506507, -46.6333824);
    }, []);

    useEffect(() => {
        if (searchCity.length >= 2) {
            handleSearchCity(searchCity);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [searchCity]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    async function handleSearchCity(cityName: string) {
        const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

        setLoading(true);
        cityName = cityName.trim();

        try {
            const response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`,
            );
            if (!response.ok) console.error("Erro ao buscar cidade");

            const data = await response.json();

            setLoading(false);
            setSuggestions(data);
            setShowSuggestions(true);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(`Erro desconhecido: ${error}`);
            }
        }
    }

    function handleSearchWeather(lat: number, lon: number) {
        fetchWeather(lat, lon);
        setSuggestions([]);
        setShowSuggestions(false);
        setSearchCity("");
    }

    function handleThemeChange() {
        setTheme((prevTheme) => {
            const nextTheme = prevTheme === "dark" ? "light" : "dark";
            return nextTheme;
        });
    }

    return (
        <div className="flex items-start gap-2">
            <div className=" flex-1 relative" ref={searchContainerRef}>
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                <Input
                    placeholder="Pesquisar"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    required
                />

                {loading && (
                    <div
                        className={clsx(
                            "flex flex-col items-start",
                            "absolute top-full left-0 right-0 overflow-hidden mt-2",
                            "bg-neutral-100 shadow rounded-lg",
                            "dark:bg-neutral-700",
                        )}
                    >
                        <p
                            className={clsx(
                                "flex flex-col items-start",
                                "p-3 w-full cursor-pointer",
                                "hover:bg-sky-700 hover:text-neutral-50 transition",
                            )}
                        >
                            <span className="font-bold">Pesquisando...</span>
                        </p>
                    </div>
                )}

                {showSuggestions && (
                    <div
                        className={clsx(
                            "flex flex-col items-start",
                            "absolute top-full left-0 right-0 overflow-hidden mt-2",
                            "bg-neutral-100 shadow rounded-lg",
                            "dark:bg-neutral-700",
                        )}
                    >
                        <div className="max-h-80 w-full overflow-y-auto">
                            {suggestions.map((city) => (
                                <button
                                    key={`${city.lat}-${city.lon}`}
                                    onClick={() => handleSearchWeather(city.lat, city.lon)}
                                    className={clsx(
                                        "flex flex-col items-start",
                                        "p-3 w-full cursor-pointer",
                                        "hover:bg-sky-700 hover:text-neutral-50 transition",
                                    )}
                                >
                                    <span className="font-bold">
                                        {city.name}
                                        {city.state && `, ${city.state}`} - {city.country}
                                    </span>
                                    <span className="text-sm">{`${city.lat.toFixed(2)}, ${city.lon.toFixed(2)}`}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Button type="button" aria-label="Alterar tema" title="Alterar tema" onClick={handleThemeChange}>
                {nextThemeIcon[theme]}
            </Button>
        </div>
    );
}
