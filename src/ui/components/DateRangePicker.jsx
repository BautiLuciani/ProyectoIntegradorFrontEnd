import React, { useState } from 'react'
import DatePicker, { CalendarContainer } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' 

const DateRangePicker = ({dateRange, setDateRange}) => {
    
    const [startDate, endDate] = dateRange;
    const ayer = new Date(Date.now() - 1);
    const MyContainer = ({ className, children }) => {
      return (
        <div style={{ 
            padding: "5px", 
            background: "#f0572d", 
            border: "1px solid #000" ,
            borderRadius: "3%"
        }}>
          <CalendarContainer className={className}>
            <div style={{ position: "relative" }}>{children}</div>
          </CalendarContainer>
        </div>
      );
    };
    return (
      <DatePicker
        showIcon
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        monthsShown={2}
        dateFormat="dd/MM/yyyy"
        shouldCloseOnSelect={true}
        minDate={ayer}
        placeholderText="Seleccione sus fechas"
        showDisabledMonthNavigation={false}
        calendarContainer={MyContainer}
        showPopperArrow={false}
      />
    );
  };

export default DateRangePicker