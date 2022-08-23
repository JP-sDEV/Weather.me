import React, { useState, useEffect, useContext } from 'react'
import { AppContext, StoreContext } from '../Context/global'
import Image from 'next/image'
import { GetRecommendations } from '../pages/api/Helpers/Recs'
import Cloudy from "../public/icons/cloudy.svg"

type Props = {
  rec: string
}

const SecondaryCard = (props: Props) => {
  const [info, setInfo] = useState({
    text: "",
    icon: Cloudy,
    stat: "",
    title: "",
  })
  const { forecast, location } = useContext(AppContext) as StoreContext

  useEffect(() => {
    
    GetRecommendations(props.rec, forecast.forecast, forecast.current)
      .then(r => setInfo({
        ...info,
        text: r!.text,
        icon: r!.icon,
        stat: r!.stat,
        title: `${props.rec}`
      }))

  }, [forecast, location])

  return (
    <div className='flex flex-row p-2 border-4 border-black rounded-md md:max-h-28 min-w-full '>
      
      <div className='flex flex-col'>
        <h1 className="mb-1">{info.title}</h1>
        <Image src={info.icon} height={60} width={100} />
        <h4 className='mx-auto mt-1'>{info.stat}</h4>
      </div>

      <p className='ml-4 my-auto'>{info.text}</p>

    </div>
  )
}

export default SecondaryCard