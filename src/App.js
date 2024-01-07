import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/chats" element={<Chat/>}/>
      </Routes>
    </div>
  );
}

export default App;
