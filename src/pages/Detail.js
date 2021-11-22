import React, {useState, useEffect} from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import "./Detail.css";

function Detail(){
    
    const[load, setload] = useState(false);
    

    const [game, setgame] = useState([]);
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        async function fetchGamesData(){
            var options = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
                params: {id: id},
                headers: {
                  'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                  'x-rapidapi-key': '6041d13232msha338758732f3ae4p1fec20jsn866ff129c58a'
                }
              };
              
              axios.request(options).then(function (response) {
                  setload(true)
                  setgame(response.data)
                  console.log(response.data);
              }).catch(function (error) {
                  console.error(error);
              });
        }
        fetchGamesData()
    }, [])

    return(
        <section className="container">
            {load ? (
                <div>
                    <h1 className="title">{game.title}</h1>
                    <div>
                        <img src={game.thumbnail}></img>
                        <p>{game.short_description} </p>
                        <p>Genre : {game.genre}</p>
                        <p>Developer : {game.developer}</p>
                    </div>
                </div>
            ) : <div className="loading skeleton"></div>}
            
        </section>
    )
}

export default Detail;