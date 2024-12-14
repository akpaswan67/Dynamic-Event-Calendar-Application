import React, { useState } from 'react';
import CalendarGrid from './components/CalendarGrid';
import EventModal from './components/EventModal';
import Navigation from './components/Navigation';
import { saveToLocalStorage, getFromLocalStorage } from './utils/localStorageUtils';

const App = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [events, setEvents] = useState(getFromLocalStorage('events') || {});
    const [selectedDay, setSelectedDay] = useState(null);

    const handleDayClick = (date) => setSelectedDay(date);

    const handleSaveEvent = (date, event) => {
        const updatedEvents = { ...events, [date]: [...(events[date] || []), event] };
        setEvents(updatedEvents);
        saveToLocalStorage('events', updatedEvents);
    };

	const handleEditEvent = (date, index, updatedEvent) => {
        const updatedEvents = { ...events };
        updatedEvents[date][index] = updatedEvent;
        setEvents(updatedEvents);
        saveToLocalStorage('events', updatedEvents);
    };

    const handleDeleteEvent = (date, index) => {
        const updatedEvents = { ...events };
        updatedEvents[date].splice(index, 1);
        if (updatedEvents[date].length === 0) {
            delete updatedEvents[date]; 
        }
        setEvents(updatedEvents);
        saveToLocalStorage('events', updatedEvents);
    };

	return (
        <div className="app">
			<Navigation 
			currentMonth={currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
			onPrevMonth={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
			onNextMonth={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
			/>
			
            <CalendarGrid 
                currentMonth={currentMonth}
                onDayClick={handleDayClick}
                events={events}
            />
            {selectedDay && (
                <EventModal 
                    selectedDay={selectedDay}
                    events={events}
                    onSave={handleSaveEvent}
					onEdit={handleEditEvent}
                    onDelete={handleDeleteEvent}
                    onClose={() => setSelectedDay(null)}
                />
            )}
        </div>
    );
};

export default App;
