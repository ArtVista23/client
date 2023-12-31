import { useState, useEffect, useRef } from "react";
import { Grid, Typography, Box, Fade } from "@mui/material";
import { centerAlign, roundBorder, stack } from "../../sx/container";
import { accent2, neutral1 } from "../../sx/colors";
import ImageSlider from "../ImageSlider/ImageSlider";

export default function FirstSection() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "0px" }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  });
  const ref = useRef(null);
  return (
    <>
      <Grid item ref={ref} xs={12} md={6} sx={[centerAlign, stack]}>
        <Fade
          in={isIntersecting}
          style={{ transitionDelay: isIntersecting ? "500ms" : "0ms" }}
        >
          <Typography
            sx={{
              fontSize: { xs: 48, md: 48 },
              fontWeight: "bold",
              color: accent2,
            }}
          >
            About Us
          </Typography>
        </Fade>

        <Fade
          in={isIntersecting}
          style={{ transitionDelay: isIntersecting ? "500ms" : "0ms" }}
        >
          <Typography
            component="p"
            sx={{
              width: { xs: "90%", md: "60%" },
              textAlign: "justify",
              fontSize: { xs: 24, md: 36 },
              color: neutral1,
            }}
          >
            Welcome to ArtVista, your gateway to a captive world of art and
            history. Our platform is dedicated to bringing the rich heritage of
            sculptures and paintings to life through cutting-edge technology and
            insightfyl storytelling.
          </Typography>
        </Fade>
      </Grid>
      <Grid item xs={12} md={6} sx={[centerAlign, stack]}>
        <Box
          sx={[
            roundBorder,
            {
              width: { xs: 350, md: 500 },
              height: { xs: 400, md: 600 },
              overflow: "hidden",
            },
          ]}
        >
          <ImageSlider
            images={[
              "about1/1.jpg",
              "about1/2.jpg",
              "about1/3.jpg",
              "about1/4.jpg",
            ]}
          />
        </Box>
      </Grid>
    </>
  );
}
