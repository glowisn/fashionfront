import { UltraSrtNcstResponse } from '@/lib/types';
export interface WeatherParams {
  serviceKey: string;
  numOfRows: number;
  pageNo: number;
  dataType: string;
  base_date: string;
  base_time: string;
  nx: number;
  ny: number;
}

export type UltraSrtNcstResponse = {
  body: {
    dataType: string;
    items: {
      item: {
        baseDate: string;
        baseTime: string;
        category: string;
        nx: number;
        ny: number;
        obsrValue: string;
      }[];
      pageNo: number;
      numOfRows: number;
      totalCount: number;
    };
  };
};

export type UltraSrtNcstItem = UltraSrtNcstResponse["body"]["items"]["item"][0];

export type WeatherBlocks = {
  category: string;
  obsrValue: string;
}[];

export type CurrentRequestTime = {
  base_date: string;
  base_time: string;
};