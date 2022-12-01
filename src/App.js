import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';

const Home = React.lazy(() => import('./pages/home/index'));
const Detail = React.lazy(() => import('./pages/detail/index'));
const Giveaway = React.lazy(() => import('./pages/giveaway/index'));
const GaDetail = React.lazy(() => import('./pages/ga-detail/index'));
const Profile = React.lazy(() => import('./pages/profile/index'));

function App() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/giveaway' element={<Giveaway />} />
            <Route path='/ga-detail/:id' element={<GaDetail />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </React.Suspense>
  );
}

export default App;
