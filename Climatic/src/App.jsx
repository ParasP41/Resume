import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { City, Country } from 'country-state-city';
import Charts from './Components/Charts';
import morning from '../src/assets/morning.png'
import afternoon from '../src/assets/afternoon.png'
import evening from '../src/assets/evening.png'
import night from '../src/assets/night.png'
export default function App() {

  const [allCountries, setAllCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [allCity, setAllCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [data, setData] = useState([]);


  useEffect(() => {
    setAllCountries(Country.getAllCountries().map((country) =>
    ({
      value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode,
      },
      label: country.name,
    })));
  }, [])
  useEffect(() => {
    setAllCity(City.getCitiesOfCountry(selectedCountry?.value?.isoCode).map((city) =>
    ({
      value: {
        latitude: city.latitude,
        longitude: city.longitude,
      },
      label: city.name,
    })));
  }, [selectedCountry, setSelectedCountry])


  

  const handlerSelectedCountry = (option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  }
  const handlerSelectedCity = (option) => {
    setSelectedCity(option);
  }

  //Fetching data from Main APi
  const handletWeatherDetail = async (e) => {
   
    e.preventDefault();
    let CallAPI = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${selectedCountry.value.latitude}&longitude=${selectedCity.value.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_clear_sky_max,sunset,daylight_duration,sunrise,sunshine_duration,uv_index_max,wind_speed_10m_max&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,dew_point_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,wind_speed_180m,temperature_180m,is_day`)
    let res = await CallAPI.json()
    setData(res);
  }


  //Current Location weather
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    }
  );

  //Date and time
  const [time, setTime] = useState();
  const date = new Date().toLocaleDateString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  useEffect(() => {

    const updateTime = () => {
      setTime(new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);

  }, []);

  const getCityAndCountry = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    const response = await fetch(url);
    const data = await response.json();
    setCity(data.address.city || data.address.town || data.address.village);
    setCountry(data.address.country);
  };


  const handlerCurrentLocationWeather = async () => {
    let CallAPI = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_clear_sky_max,sunset,daylight_duration,sunrise,sunshine_duration,uv_index_max,wind_speed_10m_max&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,dew_point_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,wind_speed_180m,temperature_180m,is_day`)
    let res = await CallAPI.json()
    setData(res);
  }

  useEffect(() => {
    getCityAndCountry(lat, long);
    handlerCurrentLocationWeather();
  }, [city,country,lat,long]);

  return (
    <>


      <div className="relative bg-[url(https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=600)] h-screen w-full bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 backdrop-blur-md flex flex-col md:justify-around bg-black/40">

          <div className="relative z-10 md:flex  justify-between items-center ">
            <div className=" text-white md:w-120 p-6">
              <h2 className="text-3xl text-center font-thin">{selectedCountry?.label || country} : {selectedCity?.label || city}</h2>
              <p className="text-2xl  text-center font-thin ">{date} : {time}</p>
            </div>
            <div className='md:p-10  flex flex-col items-center justify-center '>
              <div className='flex gap-3'>
                <Select className='md:w-55 w-40' placeholder='Country' options={allCountries} value={selectedCountry} onChange={handlerSelectedCountry} />
                <Select className='md:w-55 w-40' options={allCity} placeholder='City' value={selectedCity} onChange={handlerSelectedCity} />
              </div>
              <button onClick={handletWeatherDetail} className="px-15 py-2 mt-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg shadow-md hover:bg-white/20 transition">
                Click Me
              </button>
            </div>
          </div>
          
          <div>
            <div className="w-full  max-w-7xl   mx-auto p-6  md:flex md:justify-between md:items-center text-white">
              <div className='my-5' >
                <div className="md:text-9xl text-6xl font-thin">{data?.daily?.apparent_temperature_max[0] || "0"}°C</div>
              </div>

              <div className="flex justify-between   md:gap-16 md:mt-6">
                <div className="flex flex-col items-center">
                  <img className='md:size-20 size-15' src={morning} alt="" />
                  <p className="text-sm mt-1">Morning</p>
                  <p className="text-sm text-gray-300">{data?.hourly?.apparent_temperature[5] || '0'}°C</p>
                </div>

                <div className="flex flex-col items-center">
                <img className='md:size-20 size-15' src={afternoon} alt="" />
                  <p className="text-sm mt-1">Afternoon</p>
                  <p className="text-sm text-gray-300">{data?.hourly?.apparent_temperature[12] || '0'}°C</p>
                </div>

                <div className="flex flex-col items-center">
                <img className='md:size-20 size-15' src={evening} alt="" />
                  <p className="text-sm mt-1">Evening</p>
                  <p className="text-sm text-gray-300">{data?.hourly?.apparent_temperature[17] || '0'}°C</p>
                </div>

                <div className="flex flex-col items-center">
                <img className='md:size-20 size-15' src={night} alt="" />
                  <p className="text-sm mt-1">Night</p>
                  <p className="text-sm text-gray-300">{data?.hourly?.apparent_temperature[21] || '0'}°C</p>
                </div>
              </div>
            </div>
          <div className='md:text-7xl text-3xl mx-8 md:container md:m-auto font-light  text-white' >Forecast</div>
          <Charts  weatherDetail={data} />
          </div>
        </div>

      </div>

    </>
  )
}



