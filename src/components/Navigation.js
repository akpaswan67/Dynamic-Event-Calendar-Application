import React from 'react';

const Navigation = ({ onPrevMonth, onNextMonth, currentMonth }) => (
    <div className="navigation">
        <button onClick={onPrevMonth}>Previous</button>
        <span>{currentMonth}</span>
        <button onClick={onNextMonth}>Next</button>
    </div>
);

export default Navigation;
