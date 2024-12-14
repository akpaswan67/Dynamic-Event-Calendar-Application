import React from 'react';

const EventList = ({ events }) => (
    <div className="event-list">
        {events.map((event, idx) => (
            <div key={idx} className="event-item">
                <h3>{event.name}</h3>
                <p>{event.startTime} - {event.endTime}</p>
                <p>{event.description}</p>
            </div>
        ))}
    </div>
);

export default EventList;