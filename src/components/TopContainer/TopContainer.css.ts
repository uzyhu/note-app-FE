import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  rowGap: 15,
  minHeight: "max-content",
  padding: vars.spacing.big2,
  backgroundColor: vars.color.mainDarker,
});

export const addButton = style({
    color: vars.color.brightText,
    fontSize: vars.fontSizing.T2,
    cursor: "pointer",
    marginLeft: vars.spacing.big1,
    ":hover": {
      opacity: 0.8,
      transform: "scale(1.03)"
    },
  });