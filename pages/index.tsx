import type { NextPage } from 'next'
import React, { useContext } from 'react'
import HeadMeta from '../Components/HeadMeta'
import PrimaryCard from '../Components/PrimaryCard'
import SecondaryCard from '../Components/SecondaryCard'
import Navbar from '../Components/Navbar'
import LocationSearch from '../Components/LocationSearch'

import { AppContext, StoreContext } from '../Context/global'


const Home: NextPage = () => {

  const { locationVisible } = useContext(AppContext) as StoreContext

  return (
    <div className='flex flex-col my-2 mx-2' >
      <HeadMeta />
      <Navbar />
      { (locationVisible) && <LocationSearch /> }
      

      <div className='m-auto px-0 py-3 w-full'>
          <PrimaryCard />
      </div>

      <div className='grid grid-cols-1 mx-auto gap-4 md:grid-cols-2 place-items-center my-4 xl:grid-cols-3'>
          <SecondaryCard rec="umbrella" />
          <SecondaryCard rec="coat" />
          <SecondaryCard rec="water" />
          <SecondaryCard rec="sunglasses" />
          <SecondaryCard rec="sunscreen" />
      </div>
  
    </div>
  )
}

export default Home
