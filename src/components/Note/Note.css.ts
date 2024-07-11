import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const noteContainer = style({
  display: "flex",
  flexDirection: "column",
  padding: vars.spacing.big2,
  minWidth: vars.minWidth.list,
  width: "50%", // Make it take the full width
  height: "100%", // Make it take the full height
  borderRadius: 10,
  backgroundColor: vars.color.list,
  overflowY: "auto", // Add scrollbar for overflow content
});

export const title = style({
  fontSize: vars.fontSizing.T1,
  marginBottom: vars.spacing.big2,
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: vars.spacing.small,
});

export const deleteButton = style({
  color: vars.color.deleteButton,
  padding: vars.spacing.small,
  borderRadius: 20,
  fontSize: vars.fontSizing.T4,
  marginLeft: "auto",
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.color.task,
    boxShadow: vars.shadow.basic,
    opacity: 0.8,
  },
});

export const noteItemContainer = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: vars.spacing.medium,
  backgroundColor: vars.color.task,
  borderRadius: 10,
  marginBottom: vars.spacing.big2,
  boxShadow: vars.shadow.basic,
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.color.taskHover,
    transform: "scale(1.03)",
  },
});

export const noteTitle = style({
  fontSize: vars.fontSizing.T3,
  fontWeight: "bold",
  marginBottom: vars.spacing.small,
});

export const noteContent = style({
  fontSize: vars.fontSizing.T4,
});

export const addButton = style({
  fontSize: vars.fontSizing.T2,
  cursor: "pointer",
  marginLeft: vars.spacing.big1,
  ":hover": {
    opacity: 0.8,
    transform: "scale(1.03)",
  },
});
