export function formattedTime(timezone: number) {
    const time = new Date(timezone * 1000);
    return time.toLocaleTimeString("pt-br", { hour: "2-digit", minute: "2-digit" });
}
