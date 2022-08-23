// @ts-nocheck

import React, { useState, useContext } from 'react'
import {AppContext, StoreContext} from '../Context/global'
import LocationResult from './LocationResult'

type Props = {}

const LocationSearch = (props: Props) => {
  const [response, setResponse] = useState<any>(undefined)

  const { forecast, location, locationVisible, setLocation, setLocationVisible } = useContext(AppContext) as StoreContext

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "location": location 
    }),
  };

  const viewable = {
    position: "fixed",
    display: "block",
    width:"100%",
    height:"100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 2, 
    cursor: "pointer" 
    }

    const onClick = (e: any) => {
      e.preventDefault()
      setLocationVisible(false)
    }

    const onChange = (e: any) => {

      setLocation(e.target.value)
      
      if (e.target.value.length >= 3) {
        setTimeout(() => {
        
          fetch(`api/LocationSearch`, requestOptions)
            .then(res => res.json())
            .then(result => setResponse(result.res))
            .catch(error => console.log('error', error));
  
        }, 500)

      }
    }
 
  return (
    
    <div style={viewable}>
      <div className='flex-col mx-auto my-10 p-2 w-5/6 h-5/6 bg-indigo-500 rounded-md' >
        <div className='flex justify-end'>
          <h1 className='' onClick={(e) => onClick(e)}>
            {(locationVisible && forecast) ? "X" : ""}
          </h1>
        </div>

        <div className="flex">
          <h1 className="m-auto">
            Enter a City
          </h1>
        </div>

        <div className='flex my-4'>
          <input className='m-auto w-5/6 p-2 rounded-md' 
                 type='text'
                 name='location'
                 placeholder="Toronto, ON"
                 onChange={e => onChange(e)}
                 value={ location }
                 />
        </div>

        <div className='flex'>
          <div className='m-auto w-5/6'>
            {
              (locationVisible && response) ? 
                response.results.map((c: { formatted: string; city: string; place_id: React.Key | null | undefined }) => {
                  return <LocationResult formattedName={c.formatted} cityName={c.city} key={c.place_id}/>
                }) :
                []
            }
          </div>
        </div>

        </div>
        
    </div>
  )
}

export default LocationSearch