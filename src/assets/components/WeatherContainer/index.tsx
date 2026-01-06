export function WeatherContainer({ children }: { children: React.ReactNode }) {
    return <div className="flex flex-col gap-6 bg-white p-5 rounded-xl">{children}</div>;
}
