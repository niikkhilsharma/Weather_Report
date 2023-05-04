import React from "react";

export default function WeatherCard2({
  name,
  localtime,
  is_day,
  temp_c,
  data,
}) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const Today = daysOfWeek[new Date(localtime).getDay()];
  console.log(Today);
  const nextDays = [];
  for (let i = 1; i <= 6; i++) {
    const nextDayIndex = (new Date(localtime).getDay() + i) % 7;
    nextDays.push(daysOfWeek[nextDayIndex]);
  }
  nextDays.forEach((day, i) => {
    nextDays[i] = day.substring(0, 3);
  });

  const hours = `${new Date(localtime).getHours()}`.padStart(2, "0");
  const minutes = `${new Date(localtime).getMinutes()}`.padStart(2, "0");
  const time = `${hours}:${minutes}`;
  console.log(time);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

      <section className="vh-100 my-2" style={{ backgroundColor: "#cdc4f9" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10">
              <div
                className="card shadow-0 border border-dark border-5 text-dark"
                style={{ borderRadius: "10px" }}
              >
                <div className="text-center border-end border-5 border-dark py-4">
                  <div className="d-flex justify-content-around mt-3">
                    <p className="small">{name}</p>
                    <p className="small">
                      {localtime.split(" ")[0].replaceAll("-", ":")}
                    </p>
                    <p className="small">Nikhil</p>
                  </div>
                  {/* <div className="d-flex justify-content-around align-items-center py-5 my-4"> */}
                  <div className="fold-on-ss-mid d-flex py-5 my-4 ">
                    <p className="fw-bold mb-0" style={{ fontSize: "7rem" }}>
                      {Math.round(temp_c)}°C
                    </p>
                    <div className="text-start">
                      <p className="small">{time}</p>
                      <p className="h3 mb-3">{Today}</p>
                      <p className="small mb-0">
                        {data.current.condition.text}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-3 fold-on-ss-bottom">
                    <div className="flex-column">
                      <i className="fas fa-minus"></i>
                    </div>
                    <div
                      className="flex-column border"
                      style={{ borderRadius: "10px", padding: ".75rem" }}
                    >
                      <p className="small mb-1">{Today.substring(0, 3)}</p>
                      <p className="small mb-0">
                        <strong>{temp_c}°C</strong>
                      </p>
                    </div>
                    <div className="flex-column">
                      <p className="small mb-1">{nextDays[0]}</p>
                      <p className="small mb-0">
                        <strong>
                          {data.forecast.forecastday[0].day.avgtemp_c}°C
                        </strong>
                      </p>
                    </div>
                    <div className="flex-column">
                      <p className="small mb-1"> {nextDays[1]}</p>
                      <p className="small mb-0">
                        <strong>
                          {data.forecast.forecastday[1].day.avgtemp_c}°C
                        </strong>
                      </p>
                    </div>
                    <div className="flex-column">
                      <p className="small mb-1"> {nextDays[2]}</p>
                      <p className="small mb-0">
                        <strong>
                          {data.forecast.forecastday[2].day.avgtemp_c}°C
                        </strong>
                      </p>
                    </div>
                    <div className="flex-column">
                      <p className="small mb-1">{nextDays[3]}</p>
                      <p className="small mb-0">
                        <strong>
                          {data.forecast.forecastday[3].day.avgtemp_c}°C
                        </strong>
                      </p>
                    </div>
                    <div className="flex-column">
                      <p className="small mb-1">{nextDays[4]}</p>
                      <p className="small mb-0">
                        <strong>
                          {data.forecast.forecastday[4].day.avgtemp_c}°C
                        </strong>
                      </p>
                    </div>
                    <div className="flex-column">
                      <p className="small mb-1">{nextDays[5]}</p>
                      <p className="small mb-0">
                        <strong>
                          {data.forecast.forecastday[5].day.avgtemp_c}°C
                        </strong>
                      </p>
                    </div>
                    <div className="flex-column">
                      <i className="fas fa-minus"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
