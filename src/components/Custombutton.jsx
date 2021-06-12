import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "44px",
    padding: "0 25px",
    boxSizing: "border-box",
    borderRadius: "3px",
    background: "#D36969",
    color: "#fff",
    transform: "none",
    boxShadow: "6px 6px none #c7d8ed",
    transition: "background .3s,border-color .3s,color .3s",
    "&:hover": {
      backgroundColor: "crimson"
    }
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

function Custombutton(prop) {
  return <StyledButton variant="contained">{prop.txt}</StyledButton>;
}

export default Custombutton;