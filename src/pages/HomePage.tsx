import { ThemeProvider } from "@mui/material/styles";
import NavigationBar from "../components/NavigationBar";
import ProfileSection from "../sections/ProfileSection";
import IntroSection from "../sections/IntroSection";
import ExperienceBar from "../components/ExperienceBar";
import AboutMeSection from "../sections/AboutMeSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import ExperiencesSection from "../sections/ExperiencesSection";
import BlogsSection from "../sections/BlogsSection";
import ConnectSection from "../sections/ConnectSection";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Box, Container } from "@mui/material";
import theme from "../theme/theme";
import portfolioData from "../data/portfolio.json";

const HomePage = () => {
  const {
    profile,
    intro,
    aboutMe,
    skills,
    projects,
    experiences,
    blogs,
    connect,
  } = portfolioData;

  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <Container sx={{ maxWidth: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginTop: "5em",
          }}
        >
          <ProfileSection profileObject={profile} />
          <IntroSection intro={intro} />
        </Box>
        <ExperienceBar />
        <Box sx={{ margin: "10% 5% 10% 35%", width: "60%" }}>
          <AboutMeSection content={aboutMe.content} />
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
          <ExperiencesSection experiences={experiences} />
          <BlogsSection blogs={blogs} />
          <ConnectSection connect={connect} />
        </Box>
      </Container>
      <ScrollToTopButton />
    </ThemeProvider>
  );
};

export default HomePage;
