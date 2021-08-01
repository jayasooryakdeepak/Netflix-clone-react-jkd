import React from "react"
import NavBar from "./Components/NavBar/NavBar"
import {originals,action, comedy, romance, horror, trending, thriller, sciencefiction, mystery} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner"
import RowPost from "./Components/RowPost/RowPost"
function App() {
  return (
    <div className="App">
          <NavBar/>
          <Banner/>
          <RowPost url={originals} title='Netflix Originals'/>
          <RowPost url={thriller} title='Thriller' isSmall />
          <RowPost url={sciencefiction} title='Science Fiction' isSmall />
          <RowPost url={comedy} title='Comedy' isSmall />
          <RowPost url={mystery} title='Mystery' isSmall />
          <RowPost url={romance} title='Romance' isSmall />
          <RowPost url={action} title='Action' isSmall />
          <RowPost url={horror} title='Horror' isSmall />
    </div>
  );
}

export default App;
