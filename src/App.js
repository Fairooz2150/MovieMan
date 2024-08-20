
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import { trending,action } from "./urls";
import Banner from "./Components/Banner/Banner";
import Movies from "./Components/Movies/Movies";
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Banner/>
      <Movies title='Trending' url={trending} />
      <Movies title='Action' url={action} />
    </div>
  );
}

export default App;
