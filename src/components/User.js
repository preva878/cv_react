import React from "react";
import "./User.css";

import { Home } from "@mui/icons-material";
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';



function User(){
    return(
        <div className="user">
        <img src="./image/android-chrome-192x192.png" alt="" className="user__avatar"></img>
        <h1 className="user__name">Adrian Prevot</h1>
        <p className="user__profession">Developpeur WebApp</p>
        <div className="user_infos">
            <p className="user__info"> <Home/> 93 rue de chatelet 6120 Nalinnes</p>
            <p className="user__info"> 
            <a href="tel:+32474266748"> <PhoneIcon/>0474266748</a> 
            </p>
            <p className="user__info"> <AlternateEmailIcon/> prevotadrian@gmail.com</p>
            <p className="user__info"> <CalendarMonthIcon/> date de naissance:29 mai 1986</p>
            <p className="user__info"> <LocationOnIcon/> lieu de naissance: Charleroi</p>
        </div>

        </div>
    )
}

export default User