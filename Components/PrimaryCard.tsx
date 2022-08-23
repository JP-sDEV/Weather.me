import React, { useContext, useEffect, useState } from 'react'
import Cloudy from '../public/assets/Cloudy.svg'
import Image from 'next/image'

import InfoTab from './InfoTab'
import WChart from './WChart'

import { ParseDate } from '../pages/api/Helpers/ParseData'
import {AppContext, StoreContext} from '../Context/global'

type Props = {}

const PrimaryCard = (props: Props) => {
  const { forecast } = useContext(AppContext) as StoreContext

  const [ icon, setIcon ] = useState(Cloudy)

  return (
    <div className='flex flex-col justify-center mx-auto'>
      
       
       <h1 className='mx-auto my-4 text-2xl md:text-3xl'>
          {(forecast) ? forecast.location.name: ""},
          {(forecast) ? ParseDate(forecast.location.localtime_epoch): ""}
        </h1>

      <Image src={icon} height={100} className='mx-auto'/>
      <h2 className='mx-auto my-2 text-2xl'>
        {(forecast) ? forecast.current.temp_c : ""}°C
      </h2>

      <InfoTab />
      <WChart />

    </div>
    
  )
}

export default PrimaryCard