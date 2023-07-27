import React, { useState } from 'react';


const CalendarFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selecting, setSelecting] = useState(false);

  function toggleCalendar() {
    setIsOpen(!isOpen);
  }

  function selectDate(date) {
    if (!startDate || !endDate) {
      setStartDate(date);
      setEndDate(date);
    } else if (date < startDate) {
      setStartDate(date);
    } else if (date > endDate) {
      setEndDate(date);
    } else {
      setStartDate(date);
      setEndDate(date);
    }
  }

  function highlightDatesInRange(date) {
    if (selecting) {
      return date >= startDate && date <= endDate;
    }
    return false;
  }

  function clearSelection() {
    setStartDate(null);
    setEndDate(null);
  }

  function generateDatesArray() {
    const startDate = new Date(2023, 6, 1); // 1st June 2023 (month is 0-based)
    const endDate = new Date(2023, 6, 31); // 31st July 2023 (month is 0-based)

    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const dateString = `${year}-${month}-${day}`;
      dates.push({ date: dateString, day: day });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  }

  const calendarDays = generateDatesArray();

  return (
    <div className="calendar-filter">
      <button className="calendar-button" onClick={toggleCalendar}>
        Select Date Range
      </button>
      {isOpen && (
        <div className="calendar">
          <div className="month">
            <span className="prev" onClick={clearSelection}>
              &#8249;
            </span>
            <span className="current-month">July 2023</span>
            <span className="next" onClick={clearSelection}>
              &#8250;
            </span>
          </div>
          <div className="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="days">
            {calendarDays.map((day) => (
              <div
                key={day.date}
                className={`day ${highlightDatesInRange(day.date) ? "highlighted" : ""}`}
                onClick={() => selectDate(day.date)}
              >
                {day.day}
              </div>
            ))}
          </div>
          <p>
            Selected Range: <span>{startDate} - {endDate}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CalendarFilter;
