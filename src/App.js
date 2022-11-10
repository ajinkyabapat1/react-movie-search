import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import PageNotFound from "./PageNotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie/:id" element={<SingleMovie />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
