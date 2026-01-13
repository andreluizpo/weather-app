import {
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
import { useWeather } from "../../../contexts/useWeatherContext";
import { LocalTime } from "../LocalTime";
import { formattedTime } from "../../../utils/formattedTime";
import { MessageContainer } from "../MessageContainer";
import clsx from "clsx";

export function WeatherContent() {
    const { weather, loading, error } = useWeather();

    return (
        <div data-slot="weather-content" className="grid md:grid-cols-3 gap-6 ">
            {loading && <MessageContainer type="Loading" message="Buscando dados" />}
            {error && <MessageContainer type="Error" message={error} />}
            {weather && !loading && !error && (
                <>
                    <div data-slot="weather-header" className="grid gap-2 md:col-span-3">
                        <span className="flex items-center justify-center text-2xl sm:text-3xl font-bold">
                            <MapPinIcon size={30} /> {weather.name}, {weather.sys.country}
                        </span>
                        <span className="text-center">
                            <LocalTime timezone={weather.timezone} />
                        </span>
                    </div>

                    <div data-slot="weather-main" className="grid md:col-span-2 text-center gap-2">
                        <WeatherIcon className="m-auto max-w-37.5 sm:max-w-none" iconCode={weather.weather[0].icon} />
                        <div className="text-4xl sm:text-5xl font-semibold">{Math.floor(weather.main.temp)}°C</div>
                        <div className="capitalize">{weather.weather[0].description}</div>
                        <div>Sensação térmica de {Math.floor(weather.main.feels_like)}°C</div>
                    </div>

                    <div data-slot="weather-details" className="grid max-md:sm:grid-cols-2 md:grid-cols-1 gap-2">
                        {weather.rain?.["1h"] && (
                            <div className="grid gap-2 p-3 rounded-lg bg-sky-700 text-neutral-50">
                                <span className="flex items-center gap-1 text-[14px]">
                                    <CloudRainIcon size={14} /> Precipitação
                                </span>
                                <span className="font-medium">{weather.rain["1h"]}mm/h</span>
                            </div>
                        )}

                        <div className="grid gap-2 p-3 rounded-lg bg-sky-700 text-neutral-50">
                            <span className="flex items-center gap-1 text-[14px]">
                                <DropletsIcon size={14} /> Umidade
                            </span>
                            <span className="font-medium">{weather.main.humidity}%</span>
                        </div>

                        <div className="grid gap-2 p-3 rounded-lg bg-sky-700 text-neutral-50">
                            <span className="flex items-center gap-1 text-[14px]">
                                <ChevronsDownUpIcon size={14} /> Pressão
                            </span>
                            <span className="font-medium">{weather.main.pressure}hPa</span>
                        </div>

                        <div className="grid gap-2 p-3 rounded-lg bg-sky-700 text-neutral-50">
                            <div className="flex items-center gap-1 text-[14px]">
                                <WindIcon size={14} /> Vento
                            </div>
                            <div className="flex items-center gap-1 font-medium">{weather.wind.speed}m/s</div>
                        </div>

                        <div
                            className={clsx("grid gap-2 p-3 rounded-lg bg-sky-700 text-neutral-50", {
                                "max-md:sm:col-span-2": weather.rain?.["1h"],
                            })}
                        >
                            <div className="flex items-center gap-1 text-[14px]">
                                <SunIcon size={14} /> Nascer e Por do sol
                            </div>
                            <div className="flex items-center gap-1 font-medium">
                                <SunriseIcon size={14} /> {formattedTime(weather.sys.sunrise)} <SunsetIcon size={14} />{" "}
                                {formattedTime(weather.sys.sunset)}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
