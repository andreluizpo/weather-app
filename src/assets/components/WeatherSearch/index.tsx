import { LocateIcon, MoonIcon, SearchIcon } from "lucide-react";
import { Button } from "../Button";
import { Input } from "../Input";
import { useEffect, useRef } from "react";
import { useWeather } from "../../../contexts/useWeatherContext";

export function WeatherSearch() {
    const { weather, setWeather } = useWeather();

    const cityNameInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log(weather);
    }, [weather]);

    function handleSearchCity(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (cityNameInput.current === null) return;

        const cityName = cityNameInput.current.value.trim();

        getWeatherByCityName(cityName);

        console.log(cityName);
    }

    const API_KEY = "d55963f9d3ad2d4960280fd7eadfa113";

    async function getWeatherByCityName(cityName: string) {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=pt_br`
        );

        if (!response.ok) {
            throw new Error("Cidade não encontrada");
        }

        const data = await response.json();

        console.log(data);

        setWeather(data);
    }

    return (
        <form onSubmit={handleSearchCity}>
            <div className="flex gap-2">
                <Input placeholder="Pesquisar" ref={cityNameInput} />
                <Button type="submit" aria-label="Pesquisar cidade" title="Pesquisar cidade">
                    <SearchIcon size={16} />
                </Button>
                <Button type="button" aria-label="Buscar pela localização atual" title="Buscar pela localização atual">
                    <LocateIcon size={16} />
                </Button>
                <Button type="button" aria-label="Alterar tema" title="Alterar tema">
                    <MoonIcon size={16} />
                </Button>
            </div>
        </form>
    );
}
