import "./App.css";
import SeachBar from "./SeachBar";
import { useState, useEffect } from "react";
import WeatherCard2 from "./WeatherCard2";

function App() {
  const API_KEY = "ff38320920ca42a4a23204913230205";
  let lat, lon;

  const [location, setLocation] = useState(null);
  // eslint-disable-next-line
  const [data, setData] = useState(null);
  // const [forcastData, setForcastData] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    getData();
  };

  const handleLocation = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  };

  const getData = async () => {
    /*     const url = location
      ? `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
      : `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`; */

    const url = location
      ? `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=7&aqi=no&alerts=yes`
      : `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=7&aqi=no&alerts=yes`;

    // setData(await (await fetch(url)).json());
    const demoData = await (await fetch(url)).json();
    setData(demoData);
    // const response2 = setData(await (await fetch(url2)).json());
    // setData(response);
    // setForcastData(response2);
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      console.log("name", data.location.name);
      console.log(data.current.is_day);
    }
  }, [data]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // eslint-disable-next-line
        lat = position.coords.latitude;
        // eslint-disable-next-line
        lon = position.coords.longitude;
        console.log(lat, lon);
        getData();
      });
    }
  }, []);

  return (
    <div className="p-2">
      <SeachBar handleLocation={handleLocation} handleClick={handleClick} />
      <div>
        {/* <WeatherCard /> */}
        {data && (
          <WeatherCard2
            name={data.location.name}
            localtime={data.location.localtime}
            is_day={data.current.is_day}
            temp_c={data.current.temp_c}
            data={data}
          />
        )}
      </div>
    </div>
  );
}

export default App;
