import { Box, Grid, Fade, Typography, Button } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { centerAlign, roundBorder, size, stack } from "../../sx/container";
import { minorButton } from "../../sx/button";
import { neutral1 } from "../../sx/colors";
import ImageSlider from "../ImageSlider/ImageSlider";

export default function SecondSection() {
  const navigate = useNavigate();
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
  }, []);

  const ref = useRef(null);
  return (
    <Box sx={[size, centerAlign, { backgroundColor: neutral1 }]}>
      <Grid container sx={{ width: "80%" }}>
        <Grid item xs={12} md={6} sx={[centerAlign, stack]}>
          <Box ref={ref}>
            <Fade
              in={isIntersecting}
              style={{ transitionDelay: isIntersecting ? "300ms" : "0ms" }}
            >
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
                    "home/1.jpg",
                    "home/2.jpg",
                    "home/3.jpg",
                    "home/4.jpg",
                  ]}
                />
              </Box>
            </Fade>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={[centerAlign]}>
          <Box ref={ref}>
            <Fade
              in={isIntersecting}
              style={{ transitionDelay: isIntersecting ? "300ms" : "0ms" }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 30, md: 86 },
                    fontWeight: "bold",
                    lineHeight: 0.95,
                  }}
                >
                  Welcome to ArtVista
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ width: { md: "70%" }, textAlign: "justify" }}
                >
                  Welcome to our digital haven of artistic marvels! At ArtVista,
                  We invite you to embark on a captivating journer through
                  history and creativity. Immerse yourself in the world of
                  exquisite sculptures, paintings and many more, where each
                  element comes to life in stunning 3D detail. Our platform is a
                  tribute to the timeless beauty of art, meticulously curated
                  with informative insights that breathe life into every
                  masterpiece. Join us in exploring the past, present, and
                  future of artistic expression, as we bridge the gap between
                  tradition and technology.
                </Typography>
                <Button
                  variant="contained"
                  sx={[minorButton, { marginTop: 2 }]}
                  onClick={() => navigate("/about")}
                >
                  About Us
                </Button>
              </Box>
            </Fade>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
