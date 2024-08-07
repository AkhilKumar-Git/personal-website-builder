import { Box, Typography } from "@mui/material";
import ProjectBox from "../components/ProjectBox";

interface Project {
  image: string;
  title: string;
  link: string;
  description: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <Box sx={{ padding: "40px 0", marginTop: "10%" }}>
      <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: "20px" }}>
        Projects
      </Typography>
      <Typography sx={{ marginBottom: "40px" }}>
        I have been working with tech since 5 years now and here are some of the
        work that I'd like to showcase,
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            image={project.image}
            title={project.title}
            link={project.link}
            description={project.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsSection;
