/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import GenerateModel from "../model";
import { Button } from "@mui/material";
import { cardButton } from "../../sx/button";
import { centerAlign } from "../../sx/container";
import { accent2, neutral1 } from "../../sx/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  height: "95%",
  bgcolor: neutral1,
  border: `4px solid ${accent2}`,
  p: 4,
};

export default function FullScreen({ open, handleClose, currentModel }) {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box flexGrow={1} sx={[centerAlign]}>
            <Button
              variant="contained"
              sx={[cardButton, { marginBottom: 2 }]}
              onClick={handleClose}
            >
              Close FullScreen
            </Button>
          </Box>
          <Box sx={{ height: "95%", width: 1 }}>
            <GenerateModel currentModel={currentModel.filename} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
