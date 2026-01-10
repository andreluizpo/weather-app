import type { JSX } from "react";
import {
    CloudFogIcon,
    CloudIcon,
    CloudMoonIcon,
    CloudMoonRainIcon,
    CloudRainIcon,
    CloudSunIcon,
    CloudSunRainIcon,
    CloudyIcon,
    MoonIcon,
    SnowflakeIcon,
    SunIcon,
    ZapIcon,
} from "lucide-react";

// import cloudLightning from "./icons/Cloud Lightning.svg";
// import cloudMoonRain from "./icons/Cloud Mon Rain.svg";
// import cloudMoon from "./icons/Cloud Moon.svg";
// import cloudRain from "./icons/Cloud Rain.svg";
// import cloudSunRain from "./icons/Cloud Sun Rain.svg";
// import cloudSun from "./icons/Cloud Sun.svg";
// import cloud from "./icons/Cloud.svg";
// import cloudy from "./icons/Cloudy.svg";
// import mist from "./icons/Mist.svg";
// import moon from "./icons/Moon.svg";
// import snowflake from "./icons/Snowflake.svg";
// import sun from "./icons/Sun.svg";

type WeatherIconProps = {
    className: string;
    iconCode: string;
};

export function WeatherIcon({ iconCode, className }: WeatherIconProps) {
    const iconMap: Record<string, JSX.Element> = {
        "01d": <SunIcon className={className} size={240} />,
        "02d": <CloudSunIcon className={className} size={240} />,
        "03d": <CloudIcon className={className} size={240} />,
        "04d": <CloudyIcon className={className} size={240} />,
        "09d": <CloudRainIcon className={className} size={240} />,
        "10d": <CloudSunRainIcon className={className} size={240} />,
        "11d": <ZapIcon className={className} size={240} />,
        "13d": <SnowflakeIcon className={className} size={240} />,
        "50d": <CloudFogIcon className={className} size={240} />,

        // "01d": <img className={className} height={240} width={240} src={sun}></img>,
        // "02d": <img className={className} height={240} width={240} src={cloudSun}></img>,
        // "03d": <img className={className} height={240} width={240} src={cloud}></img>,
        // "04d": <img className={className} height={240} width={240} src={cloudy}></img>,
        // "09d": <img className={className} height={240} width={240} src={cloudRain}></img>,
        // "10d": <img className={className} height={240} width={240} src={cloudSunRain}></img>,
        // "11d": <img className={className} height={240} width={240} src={cloudLightning}></img>,
        // "13d": <img className={className} height={240} width={240} src={snowflake}></img>,
        // "50d": <img className={className} height={240} width={240} src={mist}></img>,

        "01n": <MoonIcon className={className} size={240} />,
        "02n": <CloudMoonIcon className={className} size={240} />,
        "03n": <CloudIcon className={className} size={240} />,
        "04n": <CloudyIcon className={className} size={240} />,
        "09n": <CloudRainIcon className={className} size={240} />,
        "10n": <CloudMoonRainIcon className={className} size={240} />,
        "11n": <ZapIcon className={className} size={240} />,
        "13n": <SnowflakeIcon className={className} size={240} />,
        "50n": <CloudFogIcon className={className} size={240} />,

        // "01n": <img className={className} height={240} width={240} src={moon}></img>,
        // "02n": <img className={className} height={240} width={240} src={cloudMoon}></img>,
        // "03n": <img className={className} height={240} width={240} src={cloud}></img>,
        // "04n": <img className={className} height={240} width={240} src={cloudy}></img>,
        // "09n": <img className={className} height={240} width={240} src={cloudRain}></img>,
        // "10n": <img className={className} height={240} width={240} src={cloudMoonRain}></img>,
        // "11n": <img className={className} height={240} width={240} src={cloudLightning}></img>,
        // "13n": <img className={className} height={240} width={240} src={snowflake}></img>,
        // "50n": <img className={className} height={240} width={240} src={mist}></img>,
    };

    return iconMap[iconCode] || null;
}
