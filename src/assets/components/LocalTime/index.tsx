import { useEffect, useState } from "react";

type LocalTimeProps = {
    timezone: number;
};

export function LocalTime({ timezone }: LocalTimeProps) {
    const [localTime, setLocalTime] = useState<Date>(new Date());

    useEffect(() => {
        const time = new Date(Date.now() + timezone * 1000);
        setLocalTime(time);

        const hours = time.getUTCHours().toString().padStart(2, "0");
        document.body.style.backgroundImage = `var(--gradient-${hours}h)`;
    }, [timezone]);

    const date = localTime.toLocaleDateString("pt-br", { dateStyle: "full", timeZone: "UTC" });
    const time = localTime.toLocaleTimeString("pt-br", { timeStyle: "short", timeZone: "UTC" });

    return (
        <span>
            {date} | {time}
        </span>
    );
}
