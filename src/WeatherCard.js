import React, { useState } from "react";
import styles from "./WeatherCard.module.css";
import Days from "./Days";

export default function WeatherCard() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gridLeft}>
          <div className="flex justify-between items-between text-center">
            <p>Toronto</p>
            <p>21.02.2021</p>
            <p>Rain map</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="temp text-9xl font-bold">-4 C</div>
            <div className="flex items-center justify-center  flex-col relative right-16 h-full">
              <div>10:00</div>
              <div className="py-4 text-2xl">
                <strong>Sunday</strong>
              </div>
              <div>Cloudy</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Days />
            <Days />
            <Days />
            <Days />
            <Days />
            <Days />
            <Days />
          </div>
        </div>
        <div className={styles.gridRight}></div>
      </div>
    </>
  );
}
