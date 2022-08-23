import Image from 'next/image'
import React, { useContext } from 'react'
import Pin from '../public/assets/pin.svg'
import { AppContext, StoreContext } from '../Context/global'
import { ParseTemps, ParseHours, ParsePrecip, ParseWind } from '../pages/api/Helpers/ParseData'


type Props = {
  formattedName: string,
  cityName: string,
}

const LocationResult = (props: Props) => {

  const { chartData, setLocation, setForecast, setLocationVisible, setChartData } = useContext(AppContext) as StoreContext

  const onClick = async (name: string) => {
    setLocation(name)
    const locationQ = name.replace(/\s/g, "");
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "location": locationQ
      }),
    };
  
    let forecast: any;
    await fetch(`api/Weather`, requestOptions)
      .then(res => res.json())
      .then(result => forecast=result.res)
      .catch(error => console.log('error', error));

    setForecast(forecast)
    setChartData({
      ...chartData,
      time: ParseHours(forecast),
      temp: ParseTemps(forecast),
      precip:ParsePrecip(forecast),
      wind: ParseWind(forecast),
      })

    setTimeout(() => {
      setLocationVisible(false)
    }, 500)
  }

  return (
    <div className='flex my-2 p-2 bg-red-500 rounded-md' onClick={() => onClick(props.formattedName)}>
      <Image src={Pin} height={40} width={40}/> 
      <p className='my-auto'>{props.formattedName}</p>
    </div>
  )
}

export default LocationResult