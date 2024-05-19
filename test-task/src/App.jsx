import { useState, useEffect } from "react";

import MainPage from "./pages/MainPage";

import "./App.css";

function App() {
  // async function getData() {
  //   const response = fetch(
  //     "https://cloud.codesupply.co/endpoint/react/data.json"
  //   );
  //   const data = await response;

  //   console.log(data);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
