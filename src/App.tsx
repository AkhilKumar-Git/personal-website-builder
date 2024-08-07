import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import ProfileSection from "./components/ProfileSection";
import IntroSection from "./components/IntroSection";
import ExperienceSection from "./components/ExperienceSection";

const App = () => {
  const appStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#F9F9F9",
    minHeight: "100vh",
  };

  const mainContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  };

  return (
    <div style={appStyle}>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <div style={mainContentStyle}>
                <ProfileSection />
                <IntroSection />
              </div>
              <ExperienceSection />
            </main>
          }
        />
        <Route path="/work" element={<div>Work Page</div>} />
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/resume" element={<div>Resume Page</div>} />
      </Routes>
    </div>
  );
};

export default App;
