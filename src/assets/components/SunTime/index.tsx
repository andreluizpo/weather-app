import { SunriseIcon, SunsetIcon } from "lucide-react";

type SunTimeProps = {
    sunrise: number;
    sunset: number;
    timezone: number;
};

export function SunTime({ sunrise, sunset, timezone }: SunTimeProps) {
    const sunriseTime = formatSunTime(sunrise, timezone);
    const sunsetTime = formatSunTime(sunset, timezone);

    function formatSunTime(timestamp: number, timezone: number) {
        const date = new Date((timestamp + timezone) * 1000);

        return date.toLocaleTimeString("pt-br", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "UTC",
        });
    }

    return (
        <>
            <SunriseIcon size={14} /> {sunriseTime} <SunsetIcon size={14} /> {sunsetTime}
        </>
    );
}
