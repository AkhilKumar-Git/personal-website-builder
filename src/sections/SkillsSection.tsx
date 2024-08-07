import { Box } from "@mui/material";
import SkillBox from "../components/SkillBox";

interface Skill {
  title: string;
  description: string;
  richTextInput: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: "10%",
        width: "100%",
        maxWidth: "1200px",
      }}
    >
      {skills.map((skill, index) => (
        <SkillBox
          key={index}
          title={skill.title}
          description={skill.description}
          richTextInput={skill.richTextInput}
        />
      ))}
    </Box>
  );
};

export default SkillsSection;
