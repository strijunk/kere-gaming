import React from 'react'
import "./CardProfile.css"
import image from "./ijunk.jpg"

export default function CardProfile(){
    return(
        <div className="profile-card">
            <img src={image} className="avatar"></img>
            <h1> Syekh Seif Izzul Khaq </h1>
            <h3> College student at Diponegoro University </h3>
        </div>
    )
}