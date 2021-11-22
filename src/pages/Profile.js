import React, {useState, useEffect} from "react";
import axios from "axios";
import CardProfile from "../component/CardProfile";

function Profile(){

    return(
        <section>
            <h1 className="title">Profile</h1>
            <CardProfile></CardProfile>
            <style>
            </style>
        </section>
    )
}

export default Profile;