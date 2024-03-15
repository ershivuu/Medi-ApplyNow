import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Main, Route, Routes, matchPath } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Headers/Header";
import Footers from "./Components/Footers/Footers";
import Test from "./Pages/Other/Test";
import AvailableCourses from "./Pages/Courses/AvailableCourses";
function App() {
  return (
    <Main>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/test" element={<AvailableCourses />}></Route>
      </Routes>
      <Footers></Footers>
    </Main>
  );
}

export default App;
