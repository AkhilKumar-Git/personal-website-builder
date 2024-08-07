const ExperienceSection = () => {
  const containerStyle = {
    marginTop: "60px",
    fontFamily: "Arial, sans-serif",
  };

  const sectionStyle = {
    marginBottom: "30px",
  };

  const headingStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#666",
    marginBottom: "15px",
  };

  const companyStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoStyle = {
    width: "50px",
    height: "50px",
    marginRight: "15px",
    borderRadius: "10px",
  };

  const companyNameStyle = {
    fontSize: "18px",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Currently</h4>
        <div style={companyStyle}>
          <img
            src="https://via.placeholder.com/50x50/FFDD00/000000"
            alt="Yellow.ai"
            style={logoStyle}
          />
          <span style={companyNameStyle}>Technical Lead, Yellow.ai</span>
        </div>
      </div>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Previously</h4>
        <div style={{ display: "flex" }}>
          <img
            src="https://via.placeholder.com/50x50/000000/FFFFFF"
            alt="Company 1"
            style={logoStyle}
          />
          <img
            src="https://via.placeholder.com/50x50/CCCCCC/000000"
            alt="Company 2"
            style={logoStyle}
          />
          <img
            src="https://via.placeholder.com/50x50/888888/FFFFFF"
            alt="Company 3"
            style={logoStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
