import { Box, Typography } from "@mui/material";
import ExperienceBox from "../components/ExperienceBox";

interface Experience {
  image: string;
  company: string;
  designation: string;
  location: string;
  timeline: string;
  description: string;
}

interface ExperiencesSectionProps {
  experiences: Experience[];
}

const ExperiencesSection = ({ experiences }: ExperiencesSectionProps) => {
  return (
    <Box sx={{ padding: "40px 0" }}>
      <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: "20px" }}>
        Experiences
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {experiences.map((experience, index) => (
          <ExperienceBox
            key={index}
            image={experience.image}
            company={experience.company}
            designation={experience.designation}
            location={experience.location}
            timeline={experience.timeline}
            description={experience.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ExperiencesSection;
