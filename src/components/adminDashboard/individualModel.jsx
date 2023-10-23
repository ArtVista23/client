import { Box, Button, CircularProgress, Modal, TextField } from "@mui/material";
import { centerAlign, roundBorder, stack } from "../../sx/container";
import { cardButton, inputField } from "../../sx/button";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { accent1, accent2, neutral1 } from "../../sx/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "90%",
  bgcolor: neutral1,
  p: 4,
};

export default function IndividualModel({
  open,
  setOpen,
  current,
  type,
  refetch,
}) {
  const handleClose = () => setOpen(false);
  const [changes, setChanges] = useState({});
  const [loading, setLoading] = useState(false);

  const { mutate, isSuccess } = useMutation((obj) => {
    return axios.post(
      `${import.meta.env.VITE_HOST}/api/admin/updateDetails`,
      obj
    );
  });

  const handleUpdate = () => {
    mutate(
      { type: type, changes: changes, id: current._id },
      {
        onSuccess: () => {
          refetch();
          handleClose();
          setLoading(false);
        },
        onError: () => {
          setLoading(false);
        },
      }
    );
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={[style, centerAlign, roundBorder]}>
          <Box
            sx={[
              { width: { xs: "100%", md: "80%" }, gap: 3 },
              centerAlign,
              stack,
            ]}
          >
            {current.thumbnail && (
              <Box
                component="img"
                src={current.thumbnail}
                sx={{ width: 300, height: 300 }}
              />
            )}
            <TextField
              defaultValue={current.title ? current.title : current.fullname}
              label={current.title ? "Title" : "Fullname"}
              sx={inputField}
              onChange={(e) =>
                setChanges((prev) => ({
                  ...prev,
                  [current.title ? "title" : "fullname"]: e.target.value,
                }))
              }
            />
            {current.fullname && (
              <>
                <TextField
                  defaultValue={current.email}
                  label="Email"
                  sx={inputField}
                  onChange={(e) =>
                    setChanges((prev) => ({
                      ...prev,
                      ["email"]: e.target.value,
                    }))
                  }
                />
                <TextField
                  defaultValue={current.mobile}
                  label="Contact"
                  sx={inputField}
                  onChange={(e) =>
                    setChanges((prev) => ({
                      ...prev,
                      ["mobile"]: e.target.value,
                    }))
                  }
                />
              </>
            )}
            {current.info && (
              <TextField
                multiline
                rows={5}
                defaultValue={current.info}
                label="Description"
                sx={inputField}
                onChange={(e) =>
                  setChanges((prev) => ({
                    ...prev,
                    ["info"]: e.target.value,
                  }))
                }
              />
            )}
            <Button
              variant="contained"
              sx={[cardButton]}
              onClick={() => {
                setLoading(true);
                handleUpdate();
              }}
            >
              {loading ? <CircularProgress color="error" /> : "Update"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
