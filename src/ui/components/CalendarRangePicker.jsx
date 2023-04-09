import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../../styles/ProductPage.css'

const CalendarRangePicker = ({calendarRange, setCalendarRange, reservas}) => {

    const ayer = new Date(Date.now() - 1);

    const tileDisabled = ({date})=> {
        for (const usuario of reservas) {
            const startDate = new Date(usuario.fechaInicial);
            const endDate = new Date(usuario.fechaFinal);
            if (date >= startDate && date <= endDate) {
              return true;
            }
          }
          return false;
    }

    return (
        <Calendar className={'calendary calendarioReserva'}
            value={calendarRange}
            onChange={(update) => {
                setCalendarRange(update);
            }}
            minDate={ayer}
            showDoubleView={true}
            selectRange={true}
            tileDisabled={tileDisabled}
        />
    )
}

export default CalendarRangePicker