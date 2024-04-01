"use client";

import { Button } from "@nextui-org/button";
import { useState } from "react";

import { getWeather } from "./api/weather/weather";
import { UltraSrtNcstItem, WeatherBlocks } from "@/lib/types";
import { getCurrentTimeParsed } from "@/lib/utils";

export default function Home() {
  const [weatherForecastBlock, setWeatherForecastBlock] = useState<WeatherBlocks>([]);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const handleClick = () => {
    setButtonClicked(true);
    getWeather(getCurrentTimeParsed()).then((data) => {
      if (!data || !data.response) {
        console.error("Error: Something went wrong");
        console.log(data);
        alert("현재 날씨 정보를 가져올 수 없습니다.\n 잠시 후 다시 이용해 주세요.");
        setButtonClicked(false);
        return;
      }

      const weatherForecastBlock: WeatherBlocks = data.response.body.items.item.map((item: UltraSrtNcstItem) => ({
        category: item.category,
        obsrValue: item.obsrValue,
      }));
      setWeatherForecastBlock(weatherForecastBlock);
    });
  };

  const convertRainType = (rainType: string | undefined): string => {
    switch (rainType) {
      case "0":
        return "맑음";
      case "1":
        return "비";
      case "2":
        return "비/눈";
      case "3":
        return "눈";
      case "5":
        return "빗방울";
      case "6":
        return "빗방울눈날림";
      case "7":
        return "눈날림";
      default:
        return "Unknown";
    }
  };

  // location
  const location = "부산 사직동";

  return (
    <main>
      <div className="flex justify-center">
        {!buttonClicked && <Button onClick={handleClick}>{location} 날씨 가져오기</Button>}
      </div>
      <div className="m-auto flex flex-col items-center text-3xl">
        {weatherForecastBlock.length > 0 && (
          <>
            <div>현재 {location}의 날씨는?</div>
            <div>온도 : {weatherForecastBlock.find((block) => block.category === "T1H")?.obsrValue}°C</div>
            <div>
              강수 : {convertRainType(weatherForecastBlock.find((block) => block.category === "PTY")?.obsrValue)}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
