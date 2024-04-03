import { Button } from "@nextui-org/button";
import { useStore } from "@/app/store/weatherForecast";
import { UltraSrtNcstItem, WeatherBlocks } from "@/lib/types";
import { getWeather } from "@/app/api/weather/weather";
import { getCurrentTimeParsed } from "@/lib/utils";

export function GetWeatherButton() {
  const { weatherForecastBlock, setWeatherForecastBlock, buttonClicked, setButtonClicked, locationString } = useStore();
  
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

    
    return (
      <div className="flex justify-center">
        {!buttonClicked && <Button onClick={handleClick}>{locationString} 날씨 가져오기</Button>}
      </div>
    );
}