import React, { useContext } from 'react'
import {AppContext, StoreContext} from '../Context/global'

type Props = {
  
 }

const InfoTab = (props: Props) => {
  const { option, setOption } = useContext(AppContext) as StoreContext

  const onSelect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOption(e.currentTarget.value)
  }

  return (
    <div className='flex flex-row w-fit m-auto justify-around rounded-full border-fontColor border-4 p-2 mb-2'>
        
        <button value="temp" 
                className={`${(option==="temp") ? "rounded-full text-[#ff6384]": ""} px-3 text-sm md:text-xl`} 
                onClick={(e) => onSelect(e)}>
                  Temp
        </button>

        <button value="precip" 
                className={`${(option==="precip") ? "rounded-full text-[#2121cc]": ""} px-3 text-sm md:text-xl`} 
                onClick={(e) => onSelect(e)}>
                  Precip.
        </button>

        <button value="wind" 
                className={`${(option==="wind") ? "rounded-full text-[#22b534]": ""} px-3 text-sm md:text-xl`} 
                onClick={(e) => onSelect(e)}>
                  Wind
        </button>

    </div>
  )
}

export default InfoTab