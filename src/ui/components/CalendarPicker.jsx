import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const CalendarPicker = ({ reservas }) => {

    const [CalendarPicker, setCalendarPicker] = useState([null, null])
    const ayer = new Date(Date.now() - 1);

    const tileDisabled = ({ date }) => {
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
        <Calendar className={'calendario'}
            value={CalendarPicker}
            onChange={(update) => {
                setCalendarPicker(update);
            }}
            minDate={ayer}
            showDoubleView={true}
            selectRange={true}
            tileDisabled={tileDisabled}
        />
    )
}

export default CalendarPicker