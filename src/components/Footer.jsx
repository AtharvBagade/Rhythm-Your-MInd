import React from 'react';
import {BottomNavigation,BottomNavigationAction} from '@material-ui/core';
import { makeStyles , } from "@material-ui/core/styles";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YoutubeIcon from '@material-ui/icons/YouTube'

const styles=makeStyles((theme) => ({

  footer:{
      backgroundColor:"black",
      width:"100%",
      height:"150px",
      display:"flex",
      flexGrow:1,
  },

  icon1:{
    borderRadius:"70px",
    margin:"20px",
    transition: "background .3s,border-color .3s,color .3s,boxShadow .3s",
    " &:hover":{
      backgroundColor:"#EAECEE",
      boxShadow: "6px 6px none #c7d8ed", 
   },
   ["@media (max-width:800px)"]:
    {
      width:"75%"
    }


  },

  icon2:{
    borderRadius:"70px",
     margin:"20px",
     transition: "background .3s,border-color .3s,color .3s",
    " &:hover":{
      backgroundColor:"#EAECEE" 
       },

     ["@media (max-width:800px)"]:
    {
      width:"75%"
    }

  },

  icon3:{
    borderRadius:"70px",
    margin:"20px",
    transition: "background .3s,border-color .3s,color .3s",
    " &:hover":{
      backgroundColor:"#EAECEE" 
       },
       ["@media (max-width:800px)"]:
    {
      width:"75%"
    }

    
  },
  icon4:{
    borderRadius:"70px",
    margin:"20px",
    transition: "background .3s,border-color .3s,color .3s",
    " &:hover":{
      backgroundColor:"#EAECEE" 
       },
       ["@media (max-width:800px)"]:
       {
         width:"75%"
       }
   
  }

}));

export default function Footer() {
   
   const classes=styles();
   
    return (
        <BottomNavigation className={classes.footer}>
            <BottomNavigationAction label="Instagram" href="https://www.instagram.com/elementsbyatharv/" icon={<InstagramIcon style={{fill:"#C13584" }}/>} className={classes.icon1}/>
            <BottomNavigationAction label="Facebook" href="https://www.instagram.com/elementsbyatharv/" icon={<FacebookIcon style={{fill:"#3b5998"}}/>}className={classes.icon2}/>
            <BottomNavigationAction label="Twitter" href="https://www.instagram.com/elementsbyatharv/" icon={<TwitterIcon style={{fill:"#1DA1F2"}}/>}className={classes.icon3}/>
            <BottomNavigationAction label="Youtube" href="https://www.instagram.com/elementsbyatharv/" icon={<YoutubeIcon style={{fill:"#C4302B"}}/>}className={classes.icon4}/>
        </BottomNavigation>
    )
}