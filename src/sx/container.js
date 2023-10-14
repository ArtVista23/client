import { accent2, major, textColor } from "./colors";

const size = {
  height: { xs: "max-content", md: 1 },
  color: textColor,
  paddingY: { xs: 3 },
};

const centerAlign = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const stack = { flexDirection: "column" };

const roundBorder = { border: 4, borderColor: accent2, borderRadius: 3 };

const card = [
  centerAlign,
  roundBorder,
  stack,
  { height: 400, width: 300, overflow: "hidden", gap: 3, padding: 1 },
];

export { size, centerAlign, stack, roundBorder, card };
