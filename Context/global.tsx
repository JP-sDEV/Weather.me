// @ts-nocheck

import React, { useState, useEffect, createContext, Dispatch, SetStateAction } from 'react';

import { WeatherAPIResponse } from '../pages/api/Helpers/GetWeather';

import { ParseTemps, ParseHours, ParseDate, ParsePrecip, ParseWind } from '../pages/api/Helpers/ParseData'

import GetWeather from '../pages/api/Helpers/GetWeather'

interface IChartData {
    time: string[],
    chartData: number[],
  }

export type StoreContext = {
    forecast: WeatherAPIResponse,
    option: string|'temp',
    location: string| "",
    chartData: IChartData,
    locationVisible: Boolean,
    setOption: Dispatch<SetStateAction<string>>,
    setForecast: Dispatch<SetStateAction<WeatherAPIResponse>>,
    setLocation: Dispatch<SetStateAction<string>>,
    setChartData: Dispatch<SetStateAction<any>>,
    setLocationVisible: Dispatch<SetStateAction<Boolean>>,
}

export const AppContext = createContext<StoreContext | null>(null)

const AppProvider: any = ({ children }: any) => {
    const [forecast, setForecast ] = useState<WeatherAPIResponse | null>(null)
    const [chartData, setChartData ] = useState({
        time: [],
        temp: [],
        precip: [],
        wind: []
      })
    const [option, setOption] = useState<string | null>("temp")
    const [location, setLocation] = useState<string | null>(null)
    const [locationVisible, setLocationVisible] = useState(true)

    const store = {
        forecast: forecast,
        option: option,
        location: location,
        chartData: chartData,
        locationVisible: locationVisible,
        setOption: setOption,
        setForecast: setForecast,
        setLocation: setLocation,
        setLocationVisible: setLocationVisible,
        setChartData: setChartData,
    }

    useEffect(() => {
      const currentDate = ParseDate(new Date().getTime() / 1000)
      const storageData: any = localStorage.getItem('store')
      let parsedData: any; 

      if (storageData) {
        parsedData = JSON.parse(storageData)
      }


      const fetchLocalStorage = async () => {
        setForecast(parsedData.forecast)
        setLocation(parsedData.location)
        setChartData(parsedData.chartData)
      }

      const updateWeather = async (name: string) => {
        const update = await GetWeather(name)
        return update
      }

      if ((parsedData) && (parsedData.forecast) && (currentDate == ParseDate(parsedData.forecast.location.localtime_epoch))) {
        fetchLocalStorage()
        setLocationVisible(false)
        
        } else if ((parsedData) &&
                 (parsedData.forecast) && 
                 (currentDate != ParseDate(parsedData.forecast.location.localtime_epoch)) &&
                 (parsedData.location)) {
                  const locationQ = parsedData.location.replace(/\s/g, "");
                  const newForecast: any = updateWeather(locationQ)
                  newForecast.then((data: any) => {
                    setForecast(data)
                    setChartData({
                      ...chartData,
                      time: ParseHours(data),
                      temp: ParseTemps(data),
                      precip:ParsePrecip(data),
                      wind: ParseWind(data),
                      })
                      setLocationVisible(false)
                  })

      }  else {
        setLocationVisible(true)
      }
    }, [])

    useEffect(() => {
      const { forecast, location, chartData } = store

      if (forecast) {
        setChartData({
        ...chartData,
        time: ParseHours(forecast),
        temp: ParseTemps(forecast),
        precip:ParsePrecip(forecast),
        wind: ParseWind(forecast),
        })

        setForecast(forecast)
    
      const subsetStore = {
        forecast,
        location,
        chartData
      }

      localStorage.setItem(
        "store",
        JSON.stringify(subsetStore)
        )
      }

    }, [forecast, location])

    return <AppContext.Provider value={store}>{children}</AppContext.Provider>;

} 

export default AppProvider;