import { BrowserRouter, Route, NavLink, Routes} from "react-router-dom";
import { GrGamepad, GrUser } from "react-icons/gr";

import Detail from "./pages/Detail.js"
import "./App.css";
import Game from "./pages/Game";
import Profile from "./pages/Profile";

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
                        <Route path="/Profile" element={<Profile/>}></Route>
                      </Routes>
                <footer>
                        <NavLink to="/" className="iconwrapper"><GrGamepad className="icon"/>Game</NavLink>
                        <NavLink to="/Profile" className="iconwrapper"><GrUser className="icon"/>Profile</NavLink>
                </footer>
            </BrowserRouter>
        </div>
        );
}

export default App;