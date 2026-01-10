import { LocateIcon, MoonIcon, SearchIcon } from "lucide-react";
import { Button } from "../Button";
import { Input } from "../Input";

export function WeatherSearch() {
    return (
        <form>
            <div className="flex gap-2">
                <Input placeholder="Pesquisar" />
                <Button>
                    <SearchIcon size={16} />
                </Button>
                <Button>
                    <LocateIcon size={16} />
                </Button>
                <Button>
                    <MoonIcon size={16} />
                </Button>
            </div>
        </form>
    );
}
