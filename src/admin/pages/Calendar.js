import React, { useState } from "react";
import "../styles/Calendar.css";

const Calendar = () => {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [selectedDay, setSelectedDay] = useState(today);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const appointments = {
    "2026-02-05": ["Consultation - 10:00 AM"],
    "2026-02-12": ["Scaling - 12:30 PM", "Root Canal - 4:00 PM"],
    "2026-03-03": ["Bleaching - 11:00 AM"],
  };

  const changeMonth = (step) => {
    setCurrentDate(new Date(year, month + step, 1));
  };

  const formatKey = (y, m, d) =>
    `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  return (
    <div className="calendar-page">
      <h2 className="calendar-title">Appointment Calendar</h2>

      <div className="calendar-wrapper">
        {/* CALENDAR */}
        <div className="calendar-box animate-month">
          {/* HEADER */}
          <div className="calendar-header">
            <button className="nav-btn" onClick={() => changeMonth(-1)}>
              ‹
            </button>

            <h3>
              {currentDate.toLocaleString("default", { month: "long" })} {year}
            </h3>

            <button className="nav-btn" onClick={() => changeMonth(1)}>
              ›
            </button>
          </div>

          {/* DAYS */}
          <div className="calendar-grid">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="day-name">
                {d}
              </div>
            ))}

            {Array(firstDayOfMonth)
              .fill(null)
              .map((_, i) => (
                <div key={`empty-${i}`} />
              ))}

            {Array(daysInMonth)
              .fill(null)
              .map((_, i) => {
                const day = i + 1;
                const key = formatKey(year, month, day);

                const isToday =
                  day === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear();

                const isSelected =
                  selectedDay.getDate() === day &&
                  selectedDay.getMonth() === month &&
                  selectedDay.getFullYear() === year;

                return (
                  <div
                    key={day}
                    className={`calendar-day
                      ${isToday ? "today" : ""}
                      ${isSelected ? "selected" : ""}
                      ${appointments[key] ? "has-event" : ""}
                    `}
                    onClick={() =>
                      setSelectedDay(new Date(year, month, day))
                    }
                  >
                    {day}
                    {appointments[key] && <span className="dot" />}
                  </div>
                );
              })}
          </div>
        </div>

        {/* APPOINTMENTS */}
        <div className="appointment-box">
          <h3>
            Appointments –{" "}
            <span>{selectedDay.toDateString()}</span>
          </h3>

          <ul>
            {(appointments[
              formatKey(
                selectedDay.getFullYear(),
                selectedDay.getMonth(),
                selectedDay.getDate()
              )
            ] || []).length ? (
              appointments[
                formatKey(
                  selectedDay.getFullYear(),
                  selectedDay.getMonth(),
                  selectedDay.getDate()
                )
              ].map((a, i) => (
                <li key={i}>{a}</li>
              ))
            ) : (
              <li className="empty">No Appointments</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
