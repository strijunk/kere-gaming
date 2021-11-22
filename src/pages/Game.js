import React, {useState, useEffect} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Game.css";

function Game(){
    const [games, setgames] = useState([]);
    useEffect(() => {
        async function fetchGamesData(){
            var options = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                headers: {
                  'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                  'x-rapidapi-key': '6041d13232msha338758732f3ae4p1fec20jsn866ff129c58a'
                }
              };
              
              axios.request(options).then(function (response) {
                  setgames(response.data)
                  console.log(response.data);
              }).catch(function (error) {
                  console.error(error);
              });
        }
        fetchGamesData()
    }, [])

    return(
        <section>
            <h1 className="title">List Game Kere-Hore</h1>
            <div className="content">
                {
                    games.slice(0, 5).map((item, index) => (
                        <div className="gamecard">
                            <NavLink to={'/Detail/' + item.id}>
                                <h3>{item.title}</h3>
                                <img src={item.thumbnail}></img>
                                <p>Genre : {item.genre}</p>
                                <p>{item.short_description}</p>
                            </NavLink>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Game;