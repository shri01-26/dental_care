import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">Dental+</h2>

      <NavLink to="/admin">Overview</NavLink>
      <NavLink to="/admin/calendar">Calendar</NavLink>
      <NavLink to="/admin/patients">Patient List</NavLink>
      <NavLink to="/admin/messages">Messages</NavLink>
      <NavLink to="/admin/payments">Payments</NavLink>
    </aside>
  );
};

export default Sidebar;
