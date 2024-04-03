"use client";

import { GetWeatherButton } from "@/components/GetWeatherButton";
import { WeatherForecastBlock } from "@/components/WeatherForecastBlock";

export default function Home() {

  return (
    <main>
      <GetWeatherButton />
      <WeatherForecastBlock />
    </main>
  );
}
