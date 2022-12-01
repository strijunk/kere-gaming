import { useContext, useEffect, useState } from 'react';
import CardProfile from '../../components/CardProfile';
import { ThemeContext } from '../../components/Layout';
import './profile.css';

const Profile = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);
  return (
    <section className={`section ${currentTheme === 'dark' ? 'dark' : ''}`}>
      <CardProfile></CardProfile>
    </section>
  );
};

export default Profile;
