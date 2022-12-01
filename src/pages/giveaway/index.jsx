import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './giveaway.css';
import { ThemeContext } from '../../components/Layout';

function Giveaway() {
  const [giveaway, setgiveaway] = useState([]);
  useEffect(() => {
    async function fetchGiveawayData() {
      var options = {
        method: 'GET',
        url: 'https://gamerpower.p.rapidapi.com/api/giveaways',
        params: { type: 'game' },
        headers: {
          'x-rapidapi-host': 'gamerpower.p.rapidapi.com',
          'x-rapidapi-key':
            '6041d13232msha338758732f3ae4p1fec20jsn866ff129c58a',
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setgiveaway(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    fetchGiveawayData();
  }, []);

  const [currentTheme, setCurrentTheme] = useState('light');
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <section className={`section ${currentTheme === 'dark' ? 'dark' : ''}`}>
      <h1 className='title'>Giveaway time!</h1>
      <div className='content'>
        {giveaway.slice(6, 11).map((item, index) => (
          <div className='gamecard'>
            <NavLink to={'/ga-detail/' + item.id}>
              <h3>{item.title}</h3>
              <img src={item.thumbnail} alt='thumbnail'></img>
              <div className='Text'>
                <p>Type : {item.type}</p>
                <p>{item.description}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Giveaway;
