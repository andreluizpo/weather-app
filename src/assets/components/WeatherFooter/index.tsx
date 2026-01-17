import { useWeather } from "../../../contexts/useWeatherContext";
import { formattedTime } from "../../../utils/formattedTime";

export function WeatherFooter() {
    const { weather } = useWeather();

    return (
        <div className="flex justify-end text-neutral-500 text-[14px]">
            {weather && `Atualizado às ${formattedTime(weather.dt)}`}
        </div>
    );
}
