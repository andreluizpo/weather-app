import type { JSX } from "react";
// import {
//     CloudFogIcon,
//     CloudIcon,
//     CloudMoonIcon,
//     CloudMoonRainIcon,
//     CloudRainIcon,
//     CloudSunIcon,
//     CloudSunRainIcon,
//     CloudyIcon,
//     MoonIcon,
//     SnowflakeIcon,
//     SunIcon,
//     ZapIcon,
// } from "lucide-react";

import cloudLightning from "./icons/Cloud Lightning.svg";
import cloudMoonRain from "./icons/Cloud Moon Rain.svg";
import cloudMoon from "./icons/Cloud Moon.svg";
import cloudRain from "./icons/Cloud Rain.svg";
import cloudSunRain from "./icons/Cloud Sun Rain.svg";
import cloudSun from "./icons/Cloud Sun.svg";
import cloud from "./icons/Cloud.svg";
import cloudy from "./icons/Cloudy.svg";
import mist from "./icons/Mist.svg";
import moon from "./icons/Moon.svg";
import snowflake from "./icons/Snowflake.svg";
import sun from "./icons/Sun.svg";

type WeatherIconProps = {
    iconCode: string;
};

export function WeatherIcon({ iconCode }: WeatherIconProps) {
    const iconMap: Record<string, JSX.Element> = {
        // "01d": <SunIcon />,
        // "02d": <CloudSunIcon />,
        // "03d": <CloudIcon />,
        // "04d": <CloudyIcon />,
        // "09d": <CloudRainIcon />,
        // "10d": <CloudSunRainIcon />,
        // "11d": <ZapIcon />,
        // "13d": <SnowflakeIcon />,
        // "50d": <CloudFogIcon />,

        "01d": <img height={240} width={240} src={sun}></img>,
        "02d": <img height={240} width={240} src={cloudSun}></img>,
        "03d": <img height={240} width={240} src={cloud}></img>,
        "04d": <img height={240} width={240} src={cloudy}></img>,
        "09d": <img height={240} width={240} src={cloudRain}></img>,
        "10d": <img height={240} width={240} src={cloudSunRain}></img>,
        "11d": <img height={240} width={240} src={cloudLightning}></img>,
        "13d": <img height={240} width={240} src={snowflake}></img>,
        "50d": <img height={240} width={240} src={mist}></img>,

        // "01n": <MoonIcon />,
        // "02n": <CloudMoonIcon />,
        // "03n": <CloudIcon />,
        // "04n": <CloudyIcon />,
        // "09n": <CloudRainIcon />,
        // "10n": <CloudMoonRainIcon />,
        // "11n": <ZapIcon />,
        // "13n": <SnowflakeIcon />,
        // "50n": <CloudFogIcon />,

        "01n": <img height={240} width={240} src={moon}></img>,
        "02n": <img height={240} width={240} src={cloudMoon}></img>,
        "03n": <img height={240} width={240} src={cloud}></img>,
        "04n": <img height={240} width={240} src={cloudy}></img>,
        "09n": <img height={240} width={240} src={cloudRain}></img>,
        "10n": <img height={240} width={240} src={cloudMoonRain}></img>,
        "11n": <img height={240} width={240} src={cloudLightning}></img>,
        "13n": <img height={240} width={240} src={snowflake}></img>,
        "50n": <img height={240} width={240} src={mist}></img>,
    };

    return iconMap[iconCode] || null;
}
