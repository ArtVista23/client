/* eslint-disable react/prop-types */
import {
  TableBody,
  TableContainer,
  TableCell,
  tableCellClasses,
  TableRow,
  Paper,
  Table,
  TableHead,
  Button,
  styled,
} from "@mui/material";
import { useState } from "react";
import FeedbackPopUp from "./feedbackPopUp";
import { dominant, major, textColor } from "../../../sx/colors";
import { selectButton } from "../../../sx/button";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: dominant,
    color: major,
    border: `2px solid ${dominant}`,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    backgroundColor: major,
    border: `2px solid ${dominant}`,
    textAlign: "center",
    color: textColor,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({}));
export default function FeedbackTable({ list }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [currentFeedback, setCurrentFeedback] = useState({});
  const handleCurrentFeedback = (item) => {
    setCurrentFeedback(item);
    handleOpen();
  };
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          width: "95%",
          margin: "0 auto",
          marginTop: 5,
          overflowY: "auto",
          maxHeight: "60%",
          scrollbarWidth: "thin",
        }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Option</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.fullname}
                </StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={[selectButton]}
                    onClick={() => {
                      handleCurrentFeedback(row);
                    }}
                  >
                    View
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <FeedbackPopUp
        open={open}
        handleClose={handleClose}
        currentFeedback={currentFeedback}
      />
    </>
  );
}
