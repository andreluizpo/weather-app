import { useEffect, useState } from "react";

type LocalTimeProps = {
    timezone: number;
};

export function LocalTime({ timezone }: LocalTimeProps) {
    const [localTime, setLocalTime] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date(Date.now() + timezone * 1000);
            setLocalTime(time);

            const hours = time.getUTCHours();
            document.body.style.backgroundImage = `var(--gradient-${hours}h)`;
        }, 1000);

        return () => clearInterval(interval);
    }, [timezone]);

    const date = localTime.toLocaleDateString("pt-br", { dateStyle: "full" });
    const time = localTime.toLocaleTimeString("pt-br", { timeStyle: "short", timeZone: "UTC" });

    return (
        <span>
            {date} | {time}
        </span>
    );
}
