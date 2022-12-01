import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './home.css';
import { ThemeContext } from '../../components/Layout';

const Home = () => {
  const [games, setgames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [currentTheme, setCurrentTheme] = useState('light');
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  useEffect(() => {
    async function fetchGamesData() {
      var options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key':
            '6041d13232msha338758732f3ae4p1fec20jsn866ff129c58a',
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setgames(response.data.slice(0, 15));
          setFilteredGames(response.data.slice(0, 15));
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    fetchGamesData();
  }, []);

  useEffect(() => {
    setFilteredGames(
      games.filter((game) =>
        game.title.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  }, [keyword, games]);
  return (
    <section className={`section ${currentTheme === 'dark' ? 'dark' : ''}`}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 className='title'>List Game Kere-Hore</h1>
        <input
          name='keyword'
          type='text'
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          style={{
            marginRight: '12px',
            marginTop: '10px',
            marginBottom: '30px',
            width: '300px',
            padding: '8px',
            borderRadius: '10px',
          }}
          placeholder='Search game...'
        />
      </div>
      <div className='content' style={{ paddingBottom: '100px' }}>
        {filteredGames.map((item, index) => (
          <div key={index} className='gamecard'>
            <NavLink to={'/detail/' + item.id}>
              <h3>{item.title}</h3>
              <img src={item.thumbnail} alt='thumbnail'></img>
              <p>Genre : {item.genre}</p>
              <p>{item.short_description}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
