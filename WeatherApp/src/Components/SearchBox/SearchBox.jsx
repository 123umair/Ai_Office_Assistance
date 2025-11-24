import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import axios from 'axios';
const SearchBox = ({ updateInfo, setError }) => {
  const [city, setCity] = useState("")
  const API_KEY = 'a63cdedea394f2f1cb5f46105c8addb6'
  const url = 'https://api.openweathermap.org/data/2.5/weather'
  const checkWeather = async () => {
    try {
      // let resp = await fetch(`${url}?q=${city}&appid=${API_KEY}&units=metric`)
      // let jsonResp = await resp.json() // this api with fetch method 
       let resp = await axios.get(`${url}?q=${city}&appid=${API_KEY}&units=metric`)
       let jsonResp = resp.data


      let Result = {
        city: city,
        feels_like: jsonResp.main.feels_like,
        grnd_level: jsonResp.main.grnd_level,
        humidity: jsonResp.main.humidity,
        pressure: jsonResp.main.pressure,
        temp: jsonResp.main.temp,
        temp_max: jsonResp.main.temp_max,
        temp_min: jsonResp.main.temp_min,
        weather: jsonResp.weather[0].description
      }

      return Result

    } catch (err) {
      throw err
    }

  }


  const handleChange = (e) => {
    setCity(e.target.value)

  }
  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setCity('')
      setError(false)
      const result = await checkWeather()

      updateInfo(result)
    } catch (error) {
      setError(true)

    }
  }
  return (
    <div className='text-center '>
      <h3 className='text-2xl font-semibold'>Search for the weather</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
        <br /> <br />
        <Button variant='contained' type='submit' >Search</Button>
        <br /><br />

      </form>
    </div>
  )
}

export default SearchBox