import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { Category} from "./page/Category"
import{SignIn} from "./page/SignIn"
function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
