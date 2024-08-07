import React, { useState } from "react";

const ProfileSection = () => {
  const [name] = useState("Neeraj Walia");
  const [image] = useState("https://via.placeholder.com/400x400");

  const containerStyle = {
    display: "flex",
    alignItems: "flex-start",
    marginTop: "40px",
    fontFamily: "Arial, sans-serif",
  };

  const leftColumnStyle = {
    flexBasis: "40%",
  };

  const imageStyle = {
    width: "100%",
    aspectRatio: "1 / 1",
    borderRadius: "15px",
    objectFit: "cover" as const,
    marginBottom: "20px",
  };

  const nameStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const emailStyle = {
    fontSize: "14px",
    color: "#666",
    marginBottom: "15px",
  };

  const socialButtonStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "12px",
  };

  return (
    <div style={containerStyle}>
      <div style={leftColumnStyle}>
        <img src={image} alt={name} style={imageStyle} />
        <h2 style={nameStyle}>{name}</h2>
        <p style={emailStyle}>neeraj2106@gmail.com</p>
        <div>
          <a
            href="#"
            style={{ ...socialButtonStyle, backgroundColor: "black" }}
          >
            X
          </a>
          <a
            href="#"
            style={{ ...socialButtonStyle, backgroundColor: "#0077B5" }}
          >
            in
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
