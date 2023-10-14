import { getReviews } from "../../hooks/getReviews";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { accent2, dominant, major, neutral1, textColor } from "../../sx/colors";
import { centerAlign, size } from "../../sx/container";
import { cardButton } from "../../sx/button";
import { useState } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 350, md: 500 },
  height: { xs: 350, md: 500 },
  overflow: "auto",
  bgcolor: neutral1,
  border: `2px solid ${accent2}`,
  borderRadius: 3,
  color: textColor,
  p: 4,
  scrollbarWidth: "thin",
  scrollbarColor: `${dominant} ${major}`,
};

export default function ReviewPopup({ open, handleClose, model_id }) {
  const { data, isLoading, refetch } = getReviews(model_id);
  const [review, setReview] = useState("");
  const handleAddReview = async () => {
    const user_id = sessionStorage.getItem("userId");
    await axios.post(`${import.meta.env.VITE_HOST}/api/user/addReview`, {
      user_id: user_id,
      model_id: model_id,
      review: review,
    });
    setReview("");
    refetch();
  };

  if (isLoading) {
    return (
      <Box sx={[size, centerAlign]}>
        <CircularProgress color="success" />
      </Box>
    );
  } else {
    return (
      <div>
        <Modal keepMounted open={open} onClose={handleClose}>
          <Box sx={style}>
            <Box
              sx={[
                {
                  border: "2px solid black",
                  height: "80%",
                  overflowY: "auto",
                  marginBottom: 1,
                  padding: 2,
                  gap: 2,
                },
              ]}
            >
              {data.length > 0
                ? data.map((item) => (
                    <Box
                      key={item._id}
                      sx={{ border: "1px solid black", padding: 1 }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        {item.username}
                      </Typography>
                      <Typography>{item.review}</Typography>
                    </Box>
                  ))
                : "No Reviews"}
            </Box>
            <Box sx={[centerAlign]}>
              <TextField
                placeholder="add a review"
                multiline
                rows={3}
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
              <Button
                variant="contained"
                sx={[cardButton, { marginLeft: 2 }]}
                onClick={handleAddReview}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    );
  }
}
