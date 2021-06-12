import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import { Link } from 'react-router-dom';
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    //border: "0.02px solid white",
    marginLeft:"auto",
    marginRight:"auto",
    backgroundColor: "#F9E6E6",
    color:"#D36969",
    borderRadius: "10px",
    fontFamily: "Bradley Hand ITC",
    "&:hover": {
      boxShadow: "6px 6px none rgba(0,0,0,0.5)",
      cursor: "pointer"
    },

    ["@media (max-width:800px)"]:
    {
      width:"75%"
    },

    ["@media (max-width:650px)"]:
    {
      width:"60%",
      fontSize:"1rem",
    }
  },

  

}));

export default function Mycard(props) {
  const classes = useStyles();

  return (
    
    <Card className={classes.root}>
      <CardHeader
        title={props.header}
        //subheader={props.subheader}
        style={{
          borderBottom: "0.02px solid white",
          color:"white",
          backgroundColor:"#D36969"
        }}
      />
      
      <CardContent>
        <Typography variant="body2" component="p" >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.<br /> <br />
          <Link to="/Info">  
         
          Show more..
        </Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
         
      </CardActions>
 
    </Card>
  );
}