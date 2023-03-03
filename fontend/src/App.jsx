import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { News } from "./page/News";
import { Not } from "./page/D404";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/News" element={<News />}></Route>
        <Route path="/D404" element={<Not />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
