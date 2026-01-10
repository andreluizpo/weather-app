export function WeatherContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid gap-6 bg-white dark:bg-neutral-800 text-neutral-900  dark:text-neutral-50 p-6 rounded-xl shadow">
            {children}
        </div>
    );
}
