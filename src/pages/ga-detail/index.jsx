import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ga-detail.css';
import { ThemeContext } from '../../components/Layout';

function Gadetail() {
  const [load, setload] = useState(false);

  const [gadetail, setGadetail] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    async function fetchGadetail() {
      var options = {
        method: 'GET',
        url: 'https://gamerpower.p.rapidapi.com/api/giveaway',
        params: { id: id },
        headers: {
          'x-rapidapi-host': 'gamerpower.p.rapidapi.com',
          'x-rapidapi-key':
            '6041d13232msha338758732f3ae4p1fec20jsn866ff129c58a',
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setload(true);
          setGadetail(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    fetchGadetail();
  }, [id]);

  const [currentTheme, setCurrentTheme] = useState('light');
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <section className={`container ${currentTheme === 'dark' ? 'dark' : ''}`}>
      {load ? (
        <div>
          <h1 className='title'>{gadetail.title}</h1>
          <div>
            <img src={gadetail.thumbnail} alt='thumbnail'></img>
            <p>{gadetail.description}</p>
            <p>end date :{gadetail.end_date}</p>
            <br></br>
            <a className='link' href={gadetail.open_giveaway_url}>
              Get Involved!
            </a>
          </div>
        </div>
      ) : (
        <div className='loading skeleton'></div>
      )}
    </section>
  );
}

export default Gadetail;
