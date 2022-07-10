import React, { useState, useEffect } from "react";
import moment from "moment"

import "./Cal.css";
import CleanBuild from "./CleanBuild";
import dayStyles, { isBeforeToday } from "./styles";
import Header from "./header.jsx";
import { useParams } from "react-router-dom";

// const Cal = ({ value, onChange }) => {
  const Cal = () => {
  const [calender, setCalender] = useState([]);
  const [value, setValue] = useState(moment());

  const {year} = useParams()
  const {month} = useParams()





    useEffect(()=>{
      if(!year && !month ){
        return;
      } 
      else if(month > 12 || year.length !== 4){
        alert("Please enter valid month or year")
        return;
      }
      else{
        if(!month && year){
          // onChange(moment(`$(year)-$(1)`))
          setValue(moment(`${year}-${1}`))
        }

        else{
          // onChange(moment(`$(year)-$(month)`))
          setValue(moment(`${year}-${month}`))
        }
      }
    return ()=>{
      console.log("cleanup function doing its work")
    }
    },[year,month, setValue])



  useEffect(() => {
    setCalender(CleanBuild(value));
  }, [value]);


  return (
    <div className='calendar__css'>
      {/* <Header value={value} setValue={onChange} /> */}
      <Header value={value} setValue={setValue} />
      <div className='body__calendar'>
        <div className='day__Name'>
          {["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"].map((d) => {
            return <div key={d} className='week'> {d} </div>;
          })}
        </div>

        {calender.map((week) => (
          <div className="week__row" key={week}>
            {week.map((day) => {
              return (
                <div key={day}
                  className='flintcalenderday'
                  onClick={() => !isBeforeToday(day)  &&  setValue(day)}
                >
                  {" "}
                  <div className={dayStyles(day, value)} >
                    {" "}
               <h5> {day.format("D").toString()} </h5>     
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
