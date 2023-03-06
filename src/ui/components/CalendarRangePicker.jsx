import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../../styles/ProductPage.css'

const CalendarRangePicker = () => {

    const [calendarRange, setCalendarRange] = useState([null, null]);
    const ayer = new Date(Date.now() - 1);

    return (
        <Calendar className={'calendary'}
            value={calendarRange}
            onChange={(update) => {
                setCalendarRange(update);
            }}
            minDate={ayer}
            showDoubleView={true}
            selectRange={true}
        />
    )
}

export default CalendarRangePicker