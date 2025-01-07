import React, { useState } from "react";

function Timeline() {
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState({ name: "", story: "" });

  const addStory = (e) => {
    e.preventDefault();
    setStories([...stories, newStory]);
    setNewStory({ name: "", story: "" });
  };

  // Inline styles
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    background: "url('./assets/image13.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
    minHeight: "100vh",
    color: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  const formStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "8px",
    width: "80%",
    maxWidth: "600px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    backgroundColor: "#f1f1f1",
    color: "#333",
  };

  const inputFocusStyle = {
    borderColor: "#4CAF50",
    outline: "none",
  };

  const buttonStyle = {
    padding: "12px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#45a049",
  };

  const storiesStyle = {
    width: "80%",
    maxWidth: "600px",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
  };

  const listItemStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const strongStyle = {
    color: "#4CAF50",
  };

  // Submit Handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addStory(e);
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", fontSize: "2.5em", marginBottom: "20px" }}>Stories & Memories</h1>

      {/* Form for submitting new stories */}
      <form onSubmit={handleFormSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Your Name"
          value={newStory.name}
          onChange={(e) => setNewStory({ ...newStory, name: e.target.value })}
          required
          style={inputStyle}
        />
        <textarea
          placeholder="Share your story..."
          value={newStory.story}
          onChange={(e) => setNewStory({ ...newStory, story: e.target.value })}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle} onMouseEnter={e => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseLeave={e => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
          Add Story
        </button>
      </form>

      {/* Display Shared Stories */}
      <div style={storiesStyle}>
        <h2 style={{ textAlign: "center", fontSize: "2em" }}>Shared Stories</h2>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {stories.map((item, index) => (
            <li key={index} style={listItemStyle}>
              <strong style={strongStyle}>{item.name}</strong>: <p>{item.story}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Timeline;
