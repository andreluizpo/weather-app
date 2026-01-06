import {
    ArrowUp,
    ArrowUpIcon,
    ChevronsDownUpIcon,
    CloudRainIcon,
    DropletsIcon,
    MapPinIcon,
    SunriseIcon,
    SunsetIcon,
    ThermometerIcon,
    WindIcon,
} from "lucide-react";
import { WeatherIcon } from "../WeatherIcon";

export function WeatherContent() {
    return (
        <div data-slot="weather-content" className="grid gap-6 text-sky-950">
            <div data-slot="weather-header" className="flex flex-col items-center">
                <span className="flex items-center text-3xl font-bold">
                    <MapPinIcon size={30} /> Fátima do Sul, BR
                </span>
                <span>Segunda-feira, 10 de novembro de 2025 | 15:21</span>
            </div>

            <div data-slot="weather-main" className="flex flex-col items-center gap-2">
                <WeatherIcon iconCode="01d" />
                <div className="text-5xl font-semibold">35°C</div>
                <div>Algumas nuvens</div>
                <div>35°C/35°C Sensação térmica de 35°C</div>
            </div>

            <div data-slot="weather-details" className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="grid gap-2 p-3 rounded-lg bg-sky-600 text-neutral-50">
                    <span className="flex items-center gap-1 text-[14px]">
                        <CloudRainIcon size={14} /> Precipitação
                    </span>
                    <span className="font-medium">6.48mm/h</span>
                </div>

                <div className="grid gap-2 p-3 rounded-lg bg-sky-600 text-neutral-50">
                    <span className="flex items-center gap-1 text-[14px]">
                        <DropletsIcon size={14} /> Umidade
                    </span>
                    <span className="font-medium">36%</span>
                </div>

                <div className="grid gap-2 p-3 rounded-lg bg-sky-600 text-neutral-50">
                    <span className="flex items-center gap-1 text-[14px]">
                        <ChevronsDownUpIcon size={14} /> Pressão
                    </span>
                    <span className="font-medium">1009hPa</span>
                </div>

                <div className="grid col-span-1 gap-2 p-3 rounded-lg bg-sky-600 text-neutral-50">
                    <div className="flex items-center gap-1 text-[14px]">
                        <WindIcon size={14} /> Vento
                    </div>
                    <div className="flex items-center gap-1 font-medium">
                        <ArrowUpIcon size={16} /> SSO 4.24m/s
                    </div>
                </div>

                <div className="grid grid-cols-2 col-span-2 gap-2 p-3 rounded-lg bg-sky-600 text-neutral-50">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 text-[14px]">
                            <SunriseIcon size={14} /> Nascer do sol
                        </div>
                        <div className="font-medium">08:09</div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 text-[14px]">
                            <SunsetIcon size={14} /> Por do sol
                        </div>
                        <div className="font-medium">21:16</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
