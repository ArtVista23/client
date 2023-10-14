import { Box, Typography, Button } from "@mui/material";

import InputFileds from "../../components/user/inputFileds";
import { useState } from "react";
import ChangePassword from "../../components/user/changePassword";
import { cardButton, minorButton } from "../../sx/button";
import { centerAlign, roundBorder, size, stack } from "../../sx/container";
import { accent2, dominant, minor, neutral1 } from "../../sx/colors";

export default function Profile() {
  const [openPass, setOpenPass] = useState(false);
  const handleClose = () => {
    setOpenPass(false);
  };
  return (
    <Box
      sx={[
        size,
        centerAlign,
        stack,
        {
          paddingY: { xs: 2, sm: 0 },
          paddingX: { xs: 1, sm: 0 },
          backgroundColor: dominant,
        },
      ]}
    >
      <ChangePassword open={openPass} handleClose={handleClose} />
      <Box
        sx={[
          centerAlign,
          roundBorder,
          stack,
          {
            height: "auto",
            width: { md: 600 },
            gap: 3,
            padding: { xs: 5, md: 0 },
            paddingY: { xs: 5, md: 5 },
            backgroundColor: neutral1,
          },
        ]}
      >
        <Typography
          sx={{
            fontSize: { xs: 36, md: 48 },
            fontWeight: "bold",
            borderBottom: 1,
            borderBottomColor: accent2,
          }}
        >
          My Profile
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <InputFileds />
          <Button
            variant="contained"
            sx={[cardButton]}
            onClick={() => setOpenPass(true)}
          >
            Change Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
