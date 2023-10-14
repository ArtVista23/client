import { accent2, dominant, major, minor, neutral1, textColor } from "./colors";

const minorButton = {
  backgroundColor: minor,
  color: "black",
  fontWeight: "bold",
  "&:hover": { backgroundColor: minor },
};

const cardButton = {
  backgroundColor: dominant,
  fontWeight: "bold",
  "&:hover": { backgroundColor: dominant },
  "&:diabled": { backgroundColor: neutral1 },
};

const selectButton = {
  backgroundColor: accent2,
  fontWeight: "bold",
  "&:hover": { backgroundColor: accent2 },
};

const majorButton = {
  backgroundColor: major,
  color: minor,
  fontWeight: "bold",
  "&:hover": { backgroundColor: major },
};
const inputField = {
  border: 2,
  color: textColor,
  borderColor: dominant,
  borderRadius: 3,
  width: { xs: "100%", md: "80%" },
  "& fieldset": {
    border: "none",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: textColor,
  },
  "& .MuiInputBase-input": { color: textColor },
  input: { color: textColor },
  label: { color: textColor },
  "& .MuiFormHelperText-root": {
    whiteSpace: "pre-line",
  },
  "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled": {
    "-webkit-text-fill-color": textColor,
  },
};
export { minorButton, majorButton, inputField, cardButton, selectButton };
