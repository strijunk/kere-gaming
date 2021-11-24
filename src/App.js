import { BrowserRouter, Route, NavLink, Routes} from "react-router-dom";
import { GrGamepad, GrUser, GrGift } from "react-icons/gr";

import Detail from "./pages/Detail.js"
import "./App.css";
import Game from "./pages/Game";
import Profile from "./pages/Profile";
import Giveaway from "./pages/Giveaway.js";
import Gadetail from "./pages/Ga-detail.js";

function App() {
  return (
        <div className="home">
                <BrowserRouter>
                <header>
                        <h2 id="titleGroup">Kere Gaming</h2>
                        <p>Solusi gaming tanpa menyiksa dompet</p>
                </header>
                      <Routes>
                        <Route path="/" element={<Game/>}></Route>
                        <Route path="/Detail/:id" element={<Detail/>}></Route>
                        <Route path="/Ga-detail/:id" element={<Gadetail/>}></Route>
                        <Route path="/Profile" element={<Profile/>}></Route>
                        <Route path="/Giveaway" element={<Giveaway/>}></Route>
                      </Routes>
                <footer>
                        <NavLink to="/" className="iconwrapper"><GrGamepad className="icon"/>Game</NavLink>
                        <NavLink to="/Giveaway" className="iconwrapper"><GrGift className="icon"/>Giveaway</NavLink>
                        <NavLink to="/Profile" className="iconwrapper"><GrUser className="icon"/>Profile</NavLink>
                </footer>
            </BrowserRouter>
        </div>
        );
}

export default App;