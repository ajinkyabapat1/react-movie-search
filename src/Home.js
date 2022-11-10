import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./context";
import SingleMovie from './SingleMovie';
const Home = () => {
    const name=GlobalContext();
  return (
    <>
     <h1>{name}</h1>
    </>
  );
};

export default Home;
