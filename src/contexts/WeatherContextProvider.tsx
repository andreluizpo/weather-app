import { useState } from "react";
import type { WeatherProps } from "../types/weather";
import { WeatherContext } from "./WeatherContext";

export function WeatherContextProvider({ children }: { children: React.ReactNode }) {
    const [weather, setWeather] = useState<WeatherProps | null>(null);

    return <WeatherContext.Provider value={{ weather, setWeather }}>{children}</WeatherContext.Provider>;
}
