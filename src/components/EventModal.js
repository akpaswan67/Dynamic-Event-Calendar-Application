// edit the <BiCode />
import React, { useState, useEffect } from 'react';

const EventModal = ({ selectedDay, events, onSave, onEdit, onDelete, onClose }) => {
    const [eventDetails, setEventDetails] = useState({
        name: '',
        startTime: '',
        endTime: '',
        description: '',
    });

    const [editingIndex, setEditingIndex] = useState(null); // Tracks the index of the event being edited

    useEffect(() => {
        // Reset the event details and editing index when modal is opened
        setEventDetails({ name: '', startTime: '', endTime: '', description: '' });
        setEditingIndex(null);
    }, [selectedDay]);

    const handleSave = () => {
        if (editingIndex !== null) {
            onEdit(selectedDay, editingIndex, eventDetails);
        } else {
            onSave(selectedDay, eventDetails);
        }
        setEventDetails({ name: '', startTime: '', endTime: '', description: '' });
        setEditingIndex(null);
    };

    const handleEdit = (event, index) => {
        setEventDetails(event);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        onDelete(selectedDay, index);
    };

    return (
        <div className="modal">
            <h2>Events for {selectedDay}</h2>
            {events[selectedDay]?.map((event, idx) => (
                <div key={idx} className="event-item">
                    <h3>{event.name}</h3>
                    <p>{event.startTime} - {event.endTime}</p>
                    <p>{event.description}</p>
                    <button onClick={() => handleEdit(event, idx)}>Edit</button>
                    <button onClick={() => handleDelete(idx)}>Delete</button>
                </div>
            ))}
            <div className="event-form">
                <input
                    type="text"
                    placeholder="Event Name"
                    value={eventDetails.name}
                    onChange={(e) => setEventDetails({ ...eventDetails, name: e.target.value })}
                />
                <input
                    type="time"
                    value={eventDetails.startTime}
                    onChange={(e) => setEventDetails({ ...eventDetails, startTime: e.target.value })}
                />
                <input
                    type="time"
                    value={eventDetails.endTime}
                    onChange={(e) => setEventDetails({ ...eventDetails, endTime: e.target.value })}
                />
                <textarea
                    placeholder="Description"
                    value={eventDetails.description}
                    onChange={(e) => setEventDetails({ ...eventDetails, description: e.target.value })}
                ></textarea>
                <button onClick={handleSave}>{editingIndex !== null ? 'Update' : 'Save'}</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default EventModal;
