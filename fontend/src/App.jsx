import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SignUp} from "./page/SignUp"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={""}></Route>
        <Route path="/signUp" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
