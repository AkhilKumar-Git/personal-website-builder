import { Box, Typography } from "@mui/material";
import BlogBox from "../components/BlogBox";

interface Blog {
  image: string;
  title: string;
  link: string;
}

interface BlogsSectionProps {
  blogs: Blog[];
}

const BlogsSection = ({ blogs }: BlogsSectionProps) => {
  return (
    <Box sx={{ padding: "40px 0" }}>
      <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: "20px" }}>
        Blogs & resources
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {blogs.map((blog, index) => (
          <BlogBox
            key={index}
            image={blog.image}
            title={blog.title}
            link={blog.link}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BlogsSection;
