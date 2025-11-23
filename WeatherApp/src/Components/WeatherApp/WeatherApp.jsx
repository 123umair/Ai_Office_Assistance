import React, { useState } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import InfoBox from '../InfoBox/InfoBox'
const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({

  })

  const [error, setError] = useState(false)

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  }
  return (
    <div className='text-center w-full mx-auto flex flex-col justify-center items-center'>
      <SearchBox updateInfo={updateInfo} setError={setError} ></SearchBox>
      {
        error ?
          <p className='text-red-700 bg-red-300 rounded-sm p-2 m-3'>This place is not present in this Api</p>
          : <InfoBox weatherInfo={weatherInfo} ></InfoBox>
      }
    </div>
  )
}

export default WeatherApp