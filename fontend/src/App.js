import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/home";
import { About } from "./page/about";
import { SignIn } from "./page/signIn";
import { News } from "./page/news";
import { Category } from "./page/catagory";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/cat" element={<Category />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
