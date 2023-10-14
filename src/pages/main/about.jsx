import { Box, Grid } from "@mui/material";
import FirstSection from "../../components/about/firstSection";
import SecondSection from "../../components/about/secondSection";
import ThirdSection from "../../components/about/thirdSection";
import FourthSection from "../../components/about/fourthSection";
import { dominant, major, neutral1, textColor } from "../../sx/colors";

export default function About() {
  return (
    <Box
      sx={{
        height: "auto",
        color: textColor,
      }}
    >
      <Grid
        container
        sx={{ height: 1, paddingY: 5, backgroundColor: dominant }}
      >
        <FirstSection />
      </Grid>
      <Grid
        container
        sx={{
          height: 1,
          paddingY: 5,
          backgroundColor: neutral1,
        }}
      >
        <SecondSection />
      </Grid>
      <Grid
        container
        sx={{ height: 1, paddingY: 5, backgroundColor: dominant }}
      >
        <ThirdSection />
      </Grid>
      <Grid
        container
        sx={{ height: 1, paddingY: 5, backgroundColor: neutral1 }}
      >
        <FourthSection />
      </Grid>
    </Box>
  );
}
