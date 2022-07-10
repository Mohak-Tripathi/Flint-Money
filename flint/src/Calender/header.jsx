import React from 'react'

const Header = ({value, setValue}) => {

    function currentMonthName() {
        return value.format("MMMM");
      }
    
      function currentYear() {
        return value.format("YYYY");
      }
    
      function prevMonth() {
        return value.clone().subtract(1, "month");
      }
    
      function afterMonth() {
        return value.clone().add(1, "month");
      }



  return (
    <div className='header'>
    <div className='previous' onClick={()=>setValue(prevMonth())}>
      {String.fromCharCode(171)}
    </div>
    <div className='current'>
      {currentMonthName()} {currentYear()}
    </div>
    <div className='after' onClick={()=>setValue(afterMonth())}>
      {String.fromCharCode(187)}
    </div>
  </div>
  )
}
export default Header