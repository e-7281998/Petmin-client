import React from "react";
import "./styles/reset.css";
import { Routes, Route } from "react-router-dom";
import MainBTNav from "./components/MainBTNav";
import Main from "./pages/Main";
import Check from "./pages/Check";
import Favorite from "./pages/Favorite";
import Chat from "./pages/Chat";
import Mypage from "./pages/Mypage";
import Alarm from "./pages/Alarm";
import About from "./pages/banner/About";
import Hospital from "./pages/banner/Hospital";
import Register from "./pages/banner/Register";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainBTNav />}>
          <Route index element={<Main />} />
          <Route path="check" element={<Check />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="chat" element={<Chat />} />
          <Route path="mypage" element={<Mypage />} />
        </Route>
        {/* 계정 */}
        <Route path="/auth" element={<MainBTNav />}></Route>
        {/* 알림페이지 */}
        <Route path="/alarm" element={<Alarm />}></Route>
        {/* 소개페이지 */}
        <Route path="/about" element={<About />}></Route>
        {/* 펫돌봄 등록 페이지 */}
        <Route path="/register" element={<Register />}></Route>
        {/* 병원페이지 */}
        <Route path="/hospital" element={<Hospital />}></Route>
      </Routes>
    </div>
  );
};

export default App;
