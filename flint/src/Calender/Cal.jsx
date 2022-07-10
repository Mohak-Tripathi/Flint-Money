import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Cal.css";
import CleanBuild from "./CleanBuild.jsx";
import dayStyles, {isBeforeToday} from "./styles";
import Header from "./header.jsx";

const Cal = () => {
  const [calender, setCalender] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalender(CleanBuild(value));
  }, [value]);



  return (
    <div className='calender-css'>

<Header value={value} setValue={setValue} />
      <div className='body'>
        {calender.map((week) => (
          <div>
            {week.map((day) => {
              return (
                <div className='flintcalenderday' onClick={() => setValue(day)}>
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
