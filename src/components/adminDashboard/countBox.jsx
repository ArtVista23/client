/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import PublishIcon from "@mui/icons-material/Publish";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import { accent2, dominant, major, neutral1 } from "../../sx/colors";
import { useNavigate } from "react-router-dom";

export default function CountBox({ value }) {
  console.log(value);
  const navigate = useNavigate();
  const handleNavigate = (type) => {
    navigate("/admin/showModelsList", {
      state: { type: type },
    });
  };
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: dominant,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: 5,
        boxShadow: `10px 10px 0px ${accent2}`,
        cursor: "pointer",
      }}
      onClick={() => {
        handleNavigate(value.type);
      }}
    >
      {value.name == "Users" && (
        <PeopleAltIcon sx={{ fontSize: 84, color: neutral1 }} />
      )}
      {value.name == "Paintings" && (
        <ColorLensIcon sx={{ fontSize: 84, color: neutral1 }} />
      )}
      {value.name == "Sculptures" && (
        <SelfImprovementIcon sx={{ fontSize: 84, color: neutral1 }} />
      )}
      {value.name == "Artifacts" && (
        <ViewInArIcon sx={{ fontSize: 84, color: neutral1 }} />
      )}
      {value.name == "User Uploads" && (
        <PublishIcon sx={{ fontSize: 84, color: neutral1 }} />
      )}
      {value.name == "Monuments" && (
        <AccountBalanceIcon sx={{ fontSize: 84, color: neutral1 }} />
      )}
      <Typography
        sx={{
          fontSize: { xs: 20, md: 20 },
          fontWeight: "bold",
          color: neutral1,
        }}
      >
        {value.name}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: 48, md: 48 },
          fontWeight: "bold",
          color: neutral1,
        }}
      >
        {value.count}
      </Typography>
    </Box>
  );
}
