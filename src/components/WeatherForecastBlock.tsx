import { useStore } from "@/app/store/weatherForecast";

export function WeatherForecastBlock() {
  const { weatherForecastBlock, locationString } = useStore();

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
  return (
    <div className="m-auto flex flex-col items-center text-3xl">
      {weatherForecastBlock.length > 0 && (
        <>
          <div>현재 {locationString}의 날씨는?</div>
          <div>기준시간: {}</div>
          <div>온도 : {weatherForecastBlock.find((block) => block.category === "T1H")?.obsrValue}°C</div>
          <div>강수 : {convertRainType(weatherForecastBlock.find((block) => block.category === "PTY")?.obsrValue)}</div>
          <div>강수량 : {weatherForecastBlock.find((block) => block.category === "RN1")?.obsrValue}mm</div>
          <div>습도 : {weatherForecastBlock.find((block) => block.category === "REH")?.obsrValue}%</div>
          <div>풍속 : {weatherForecastBlock.find((block) => block.category === "WSD")?.obsrValue}m/s</div>
        </>
      )}
    </div>
  );
}
