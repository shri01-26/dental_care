import React, { useEffect, useState } from "react";
import "../styles/Messages.css";

const API_URL =
  "https://script.google.com/macros/s/AKfycbzJk-OZkL2JC_tyHyoJEq74X4uE8nBr5j4KuYb8N-lcXb5YY6Aby_ndaxh_PUewy4JHeg/exec";

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_URL}?action=read`, {
        method: "GET",
        mode: "cors", // ensures cross-origin requests work
      });

      const data = await response.json();
      console.log("API response:", data); // Debug: see raw API response

      if (data.success && Array.isArray(data.data)) {
        // Sort messages newest first
        const sorted = data.data.sort(
          (a, b) => new Date(b.date || 0) - new Date(a.date || 0)
        );
        setMessages(sorted);
      } else {
        console.error("Failed to fetch messages or invalid data format", data);
        setMessages([]); // fallback empty
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      setMessages([]); // fallback empty
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="messages-page">
      <h2>Patient Messages</h2>

      {loading ? (
        <p>Loading messages...</p>
      ) : messages.length === 0 ? (
        <p>No messages found</p>
      ) : (
        <div className="messages-cards">
          {messages.map((msg, idx) => (
            <div className="message-card" key={idx}>
              <h3>{msg.name || "No Name"}</h3>
              <p><strong>Email:</strong> {msg.email || "N/A"}</p>
              <p><strong>Phone:</strong> {msg.phone || "N/A"}</p>
              <p><strong>Concern:</strong> {msg.concern || "N/A"}</p>
              <p className="date">
                {msg.date
                  ? new Date(msg.date).toLocaleString()
                  : "No date available"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessagesPage;
