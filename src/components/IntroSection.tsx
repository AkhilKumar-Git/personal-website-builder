const IntroSection = () => {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    flexBasis: "60%",
    paddingLeft: "40px",
  };

  const headingStyle = {
    fontSize: "64px",
    fontWeight: "normal",
    color: "#666",
    margin: "0 0 20px 0",
  };

  const subHeadingStyle = {
    fontSize: "64px",
    fontWeight: "bold",
    color: "#333",
    margin: "0 0 20px 0",
  };

  const paragraphStyle = {
    fontSize: "18px",
    color: "#666",
    maxWidth: "500px",
    lineHeight: "1.5",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Hey!</h2>
      <h3 style={subHeadingStyle}>I'm Neeraj Walia,</h3>
      <h3 style={subHeadingStyle}>a full stack developer.</h3>
      <p style={paragraphStyle}>
        Ready to bring your dream product to life in the virtual world.
      </p>
    </div>
  );
};

export default IntroSection;
