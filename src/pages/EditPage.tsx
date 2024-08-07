import { useState } from "react";
import { Box, Container } from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import EditableProfileSection from "./EditableProfileSection";
import EditableIntroSection from "../pages/EditableIntroSection";
import EditableAboutMeSection from "../pages/EditableAboutMeSection";
import EditableSkillsSection from "../pages/EditableSkillsSection";
import EditableProjectsSection from "../pages/EditableProjectsSection";
import EditableExperiencesSection from "../pages/EditableExperiencesSection";
import EditableBlogsSection from "../pages/EditableBlogsSection";
import EditableConnectSection from "../pages/EditableConnectSection";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SiteBuilderNavbar from "../components/SiteBuilderNavbar";
import initialData from "../data/portfolio.json";

const EditPage = () => {
  const [portfolioData, setPortfolioData] = useState(initialData);

  const handleSave = () => {
    // Save changes locally
    localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
  };

  const handlePublish = () => {
    // Publish changes to portfolio.json via local server
    fetch("http://localhost:5005/update-portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(portfolioData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Website published successfully");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error writing file:", error);
      });
  };

  return (
    <Box>
      <SiteBuilderNavbar onSave={handleSave} onPublish={handlePublish} />
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
          <EditableProfileSection
            data={portfolioData.profile}
            setData={(data) =>
              setPortfolioData({ ...portfolioData, profile: data })
            }
          />
          <EditableIntroSection
            data={portfolioData.intro}
            setData={(data) =>
              setPortfolioData({ ...portfolioData, intro: data })
            }
          />
        </Box>
        <EditableAboutMeSection
          data={portfolioData.aboutMe}
          setData={(data) =>
            setPortfolioData({ ...portfolioData, aboutMe: data })
          }
        />
        <EditableSkillsSection
          data={portfolioData.skills}
          setData={(data) =>
            setPortfolioData({ ...portfolioData, skills: data })
          }
        />
        <EditableProjectsSection
          data={portfolioData.projects}
          setData={(data) =>
            setPortfolioData({ ...portfolioData, projects: data })
          }
        />
        <EditableExperiencesSection
          data={portfolioData.experiences}
          setData={(data) =>
            setPortfolioData({ ...portfolioData, experiences: data })
          }
        />
        <EditableBlogsSection
          data={portfolioData.blogs}
          setData={(data) =>
            setPortfolioData({ ...portfolioData, blogs: data })
          }
        />
        <EditableConnectSection
          data={portfolioData.connect}
          setData={(data) =>
            setPortfolioData({ ...portfolioData, connect: data })
          }
        />
      </Container>
      <ScrollToTopButton />
    </Box>
  );
};

export default EditPage;
