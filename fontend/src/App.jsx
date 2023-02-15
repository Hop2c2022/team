import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { News } from "./page/News";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/News" element={<News />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
