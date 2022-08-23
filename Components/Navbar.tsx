import Image from 'next/image'
import React, { useContext } from 'react'
import Search from '../public/assets/search.svg'
import Logo from '../public/icon.ico'

import {AppContext, StoreContext} from '../Context/global'

type Props = {}

const Navbar = (props: Props) => {

    const { locationVisible, setLocationVisible } = useContext(AppContext) as StoreContext

    const onClick = () => {
        setLocationVisible(!locationVisible)
    }

  return (
    <div className='bg-secondaryCol rounded-md' >
        <ul className="flex justify-between"> 
            <li className="mr-6 my-auto flex">
                <h1 className='ml-3 mr-1 my-auto'>Weather.me</h1>
                <Image src={Logo} height={40} width={40}/>
            </li>  
              
            <li className="mr-4 my-auto pt-1" onClick={() => onClick()}>
                <Image src={Search} width={30}/>
            </li>       
        </ul>
    </div>  
  )
}

export default Navbar