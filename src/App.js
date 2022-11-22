import { Routes, Route, Outlet  } from "react-router-dom";
import './App.css';
import Home from "../src/container/Home/Home";
import Login from "../src/container/auth/Login";
import Register from "../src/container/auth/Register"
import Manager from "./container/manager/Manager";
import Music from "./container/Music/Music";
import ManagerDetailFilm from "./container/manager/Modal/ManagerDetail/ManagerDetailFilm";
import HomePage from "./container/Home/HomePage";
import ManagerDetailUser from "./container/manager/manager_user/ManagerDetailUser";
import UserDetail from "./container/manager/manager_user/UserDetail";
import ManagerTicket from "./container/manager/manager_user/ManagerTicket";
import ChagerPassword from "./container/auth/ChagerPassword"

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/homePage" element={<HomePage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/manager" element={<Manager />} />
      <Route path="/manager-detail-film/:id" element={< ManagerDetailFilm/>} />
      <Route path="/music" element={<Music />} />
      <Route path="/user" element={<ManagerDetailUser />}>
        <Route path="detail" element={<UserDetail />} />
        <Route path="ticket" element={<ManagerTicket />} />
        
    </Route>
    <Route path="/verify-password" element={<ChagerPassword />} />

    
   

    </Routes>
   
  );
}

export default App;
