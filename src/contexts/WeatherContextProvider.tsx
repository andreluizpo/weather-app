import { useState } from "react";
import type { WeatherProps } from "../types/weather";
import { WeatherContext } from "./WeatherContext";

export function WeatherContextProvider({ children }: { children: React.ReactNode }) {
    const [weather, setWeather] = useState<WeatherProps | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    async function fetchWeather(city: string) {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
            );
            if (!response.ok) throw new Error("Erro ao buscar clima");

            const data = await response.json();
            setWeather(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError(`Erro desconhecido: ${error}`);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <WeatherContext.Provider value={{ weather, loading, error, fetchWeather }}>{children}</WeatherContext.Provider>
    );
}
