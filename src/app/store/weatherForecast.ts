import { WeatherBlocks } from "@/lib/types";
import { create } from "zustand";

type Store = {
  locationString: string;
  weatherForecastBlock: WeatherBlocks;
  buttonClicked: boolean;
  setWeatherForecastBlock: (blocks: WeatherBlocks) => void;
  setButtonClicked: (value: boolean) => void;
};

export const useStore = create<Store>((set) => ({
  locationString: "부산 사직동",
  weatherForecastBlock: [],
  buttonClicked: false,
  setWeatherForecastBlock: (blocks) => set({ weatherForecastBlock: blocks }),
  setButtonClicked: (value) => set({ buttonClicked: value }),
}));
