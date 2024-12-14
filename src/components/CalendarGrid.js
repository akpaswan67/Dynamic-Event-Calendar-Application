import React, { useState, useEffect } from 'react';
import { getDaysInMonth, formatDate } from '../utils/dateUtils';

const CalendarGrid = ({ currentMonth, onDayClick, events }) => {
    const [days, setDays] = useState([]);

    useEffect(() => {
        setDays(getDaysInMonth(currentMonth));
    }, [currentMonth]);

    return (
        <div className="calendar-grid">
            {days.map((day) => (
                <div
                    key={day.date}
                    className={`calendar-day ${day.isToday ? 'today' : ''}`}
                    onClick={() => onDayClick(day.date)}
                >
                    <span>{day.label}</span>
                    {events[day.date]?.length > 0 && <div className="event-indicator"></div>}
                </div>
            ))}
        </div>
    );
};

export default CalendarGrid;