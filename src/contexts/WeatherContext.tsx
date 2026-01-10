import { createContext } from "react";
import type { WeatherProps } from "../types/weather";

type WeatherContextType = {
    weather: WeatherProps | null;
    setWeather: React.Dispatch<React.SetStateAction<WeatherProps | null>>;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);
