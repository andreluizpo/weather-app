import {
    ArrowUpIcon,
    ChevronsDownUpIcon,
    CloudRainIcon,
    DropletsIcon,
    MapPinIcon,
    SunIcon,
    SunriseIcon,
    SunsetIcon,
    WindIcon,
} from "lucide-react";
import { WeatherIcon } from "../WeatherIcon";

export function WeatherContent() {
    return (
        <div data-slot="weather-content" className="grid md:grid-cols-3 gap-6 ">
            <div data-slot="weather-header" className="grid gap-2 md:col-span-3">
                <span className="flex items-center justify-center text-3xl font-bold">
                    <MapPinIcon size={30} /> Fátima do Sul, BR
                </span>
                <span className="text-center">Segunda-feira, 10 de novembro de 2025 | 15:21</span>
            </div>

            <div data-slot="weather-main" className="grid md:col-span-2 text-center gap-2">
                <WeatherIcon className="m-auto" iconCode="01d" />
                <div className="text-5xl font-semibold">35°C</div>
                <div>Algumas nuvens</div>
                <div>35°C/35°C Sensação térmica de 35°C</div>
            </div>

            <div data-slot="weather-details" className="grid max-md:sm:grid-cols-2 md:grid-cols-1 gap-2">
                <div className="grid gap-2 p-3 rounded-lg bg-sky-700 text-neutral-50">
                    <span className="flex items-center gap-1 text-[14px]">
                        <CloudRainIcon size={14} /> Precipitação
                    </span>
                    <span className="font-medium">6.48mm/h</span>
                </div>

                <div className="grid gap-2 p-3 rounded-lg bg-sky-700 text-neutral-50">
                    <span className="flex items-center gap-1 text-[14px]">
                        <DropletsIcon size={14} /> Umidade
                    </span>
                    <span className="font-medium">36%</span>
                </div>

                <div className="grid gap-2 p-3 rounded-lg bg-sky-700 text-neutral-50">
                    <span className="flex items-center gap-1 text-[14px]">
                        <ChevronsDownUpIcon size={14} /> Pressão
                    </span>
                    <span className="font-medium">1009hPa</span>
                </div>

                <div className="grid gap-2 p-3 rounded-lg bg-sky-700 text-neutral-50">
                    <div className="flex items-center gap-1 text-[14px]">
                        <WindIcon size={14} /> Vento
                    </div>
                    <div className="flex items-center gap-1 font-medium">
                        <ArrowUpIcon size={16} /> SSO 4.24m/s
                    </div>
                </div>

                <div className="grid max-md:sm:col-span-2 gap-2 p-3 rounded-lg bg-sky-700 text-neutral-50">
                    <div className="flex items-center gap-1 text-[14px]">
                        <SunIcon size={14} /> Nascer e Por do sol
                    </div>
                    <div className="flex items-center gap-1 font-medium">
                        <SunriseIcon size={14} /> 08:09 <SunsetIcon size={14} /> 21:16
                    </div>
                </div>
            </div>
        </div>
    );
}
