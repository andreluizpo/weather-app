import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

export function useWeather() {
    const context = useContext(WeatherContext);

    if (!context) {
        throw new Error("useWeather deve ser usado dentro de WeatherContextProvider");
    }

    return context;
}
