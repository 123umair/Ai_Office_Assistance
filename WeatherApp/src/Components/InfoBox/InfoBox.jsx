import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
const InfoBox = ({ weatherInfo }) => {
  const Hot_Url = 'https://thumbs.dreamstime.com/b/orange-sky-clouds-bright-sun-concept-climate-change-heat-wave-global-warming-summer-high-temperature-hot-weather-385645107.jpg?w=992'
  const Cold_Url = 'https://images.pexels.com/photos/34873235/pexels-photo-34873235.jpeg'
  const Rain_Url = 'https://images.pexels.com/photos/1530423/pexels-photo-1530423.jpeg'

  return (

    <div className=''>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={weatherInfo.humidity > 80 ? Rain_Url : weatherInfo.temp > 15 ? Hot_Url : Cold_Url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.city}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <p>Temperature = {weatherInfo.temp}</p>
              <p>Humidity =  {weatherInfo.humidity}</p>
              <p>Max temp = {weatherInfo.temp_max}</p>
              <p>Min temp = {weatherInfo.temp_min}</p>
              <p>
                This weather can be described as <i>{weatherInfo.weather} and it feels like {weatherInfo.feels_like}</i>
              </p>
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card></div>
  )
}

export default InfoBox