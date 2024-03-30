import { WeatherParams } from "@/lib/types";
import axios from "axios";

const URL = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";

const defaultParams = {
  serviceKey: process.env.DATA_GO_API_KEY_EN!,
  numOfRows: 14,
  pageNo: 1,
  dataType: "JSON",
  nx: 98,
  ny: 76,
};

export async function getWeather(base_date: string, base_time: string) {
  const params: WeatherParams = {
    ...defaultParams,
    base_date,
    base_time,
  };

  try {
    const { data } = await axios.get(URL, { params });
    return data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    throw error;
  }
}
