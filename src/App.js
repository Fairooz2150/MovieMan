
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import Movies from "./Components/Movies/Movies";
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Banner/>
      <Movies title='Trending' />
      <Movies title='Action' others />
    </div>
  );
}

export default App;
