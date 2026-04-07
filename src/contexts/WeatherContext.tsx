import { createContext } from "react";
import type { WeatherProps } from "../types/weather";

type WeatherContextType = {
    weather: WeatherProps | null;
    loading: boolean;
    error: string | null;
    fetchWeather: (lat: number, lon: number) => Promise<void>;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);
