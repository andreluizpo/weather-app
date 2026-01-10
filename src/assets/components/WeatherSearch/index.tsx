import { LocateIcon, MoonIcon, SearchIcon } from "lucide-react";
import { Button } from "../Button";
import { Input } from "../Input";
import { useRef } from "react";

export function WeatherSearch() {
    const cityNameInput = useRef<HTMLInputElement>(null);

    function handleSearchCity(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (cityNameInput.current === null) return;

        const cityName = cityNameInput.current.value;

        console.log(cityName);
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
