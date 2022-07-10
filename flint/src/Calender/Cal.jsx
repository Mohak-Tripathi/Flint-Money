import React, { useState, useEffect } from "react";

import "./Cal.css";
import CleanBuild from "./CleanBuild.jsx";
import dayStyles, { isBeforeToday } from "./styles";
import Header from "./header.jsx";

const Cal = ({ value, onChange }) => {
  const [calender, setCalender] = useState([]);

  useEffect(() => {
    setCalender(CleanBuild(value));
  }, [value]);

  return (
    <div className='calender-css'>
      <Header value={value} setValue={onChange} />
      <div className='body'>
        <div className='day-Name'>
          {["S", "M", "T", "W", "TH", "F", "S"].map((d) => {
            return <div classNmae='week'> {d} </div>;
          })}
        </div>

        {calender.map((week) => (
          <div>
            {week.map((day) => {
              return (
                <div
                  className='flintcalenderday'
                  onClick={() => !isBeforeToday && onChange(day)}
                >
                  {" "}
                  <div className={dayStyles(day, value)}>
                    {" "}
                    {day.format("D").toString()}{" "}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cal;
