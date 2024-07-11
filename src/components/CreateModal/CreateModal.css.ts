import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const modalContainer = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

export const modalContent = style({
  backgroundColor: vars.color.task,
  padding: vars.spacing.big1,
  borderRadius: 10,
  position: "relative",
  width: "500px",
  maxHeight: "80vh",
  overflowY: "auto",
});

export const closeButton = style({
  position: "absolute",
  top: vars.spacing.small,
  right: vars.spacing.small,
  fontSize: vars.fontSizing.T3,
  cursor: "pointer",
});

export const saveButton = style({
  marginTop: vars.spacing.medium,
  padding: vars.spacing.small,
  backgroundColor: vars.color.main,
  color: vars.color.brightText,
  borderRadius: 5,
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.color.mainDarker,
  },
});

export const textarea = style({
  width: "100%",
  padding: vars.spacing.small,
  borderRadius: 5,
  border: "1px solid #ccc",
  resize: "vertical",
});