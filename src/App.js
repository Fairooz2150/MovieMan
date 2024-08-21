
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import { trending, action, romance, horror, comedy, documentaries } from "./urls";
import Banner from "./Components/Banner/Banner";
import Movies from "./Components/Movies/Movies";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Movies title='Trending Now' url={trending} />
      <Movies title='Laugh Out Loud' url={comedy} />
      <Movies title='Action Thrillers' url={action} />
      <Movies title='Horror Essentials' url={horror} />
      <Movies title='Love Stories' url={romance} />
      <Movies title='Uncovering Truths' url={documentaries} />
      <Footer />
    </div>
  );
}

export default App;
