import "./App.css";
import jsonData from "./data.json";
import { Link } from "react-router-dom";
import Home from "./Component/Home";
import Disorders from "./Component/Disorders";
import DailyNotes from "./Component/DailyNotes";
import Evaluation from "./Component/Evaluation";
import CheckList from "./Component/CheckList";
import NutritionTracker from "./Component/NutritionTracker";
import axios from "axios";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
import Tracks from "./Component/Tracks";
import TrackItems from "./Component/TrackItems";
export const AppContext = createContext();


function App() {

  const [disorders, setDisorders] = useState([])
  const [tracks, setTracks] = useState([])
  const [trackItems, setTrackItems] = useState([])
  const [disorder, setdisorder] = useState()
  const [trackId, setTrackId] = useState()
  const [date, setDate] = useState()



  useEffect(() => {
    axios("http://localhost:3000/disorders").then(i => setDisorders(i.data))
    axios("http://localhost:3000/tracks").then(i => setTracks(i.data))
    axios("http://localhost:3000/trackItems").then(i => setTrackItems(i.data))
  }, [])






  return (
    <div className="App">
         
      <AppContext.Provider value={{
        trackId, setTrackId, date, setDate,
        disorders, setDisorders, trackItems, tracks, setTrackItems, setTracks, disorder, setdisorder
      }}>

        <div>

          <nav className="navbar">
            <img className='mylogo'
              src="https://images.hindustantimes.com/img/2022/04/11/1600x900/stethoscope-gb0f5a7dcd_1920_1649688407350_1649688443096.jpg"
              alt=""
            />
            <input type='date' onChange={e => setDate(e.target.value)} />

            <ul className="box">
              <li>
                <button>
                  <Link to={"/home"}>Home</Link>
                </button>
              </li>
              <li>
                <button>
                  <Link to={"/disorders"}>Disorders</Link>
                </button>
              </li>
              <li>
                <button>
                  <Link to={"/dailyNotes"}>Daily Notes</Link>
                </button>
              </li>
            </ul>
          </nav>
          

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/disorders" element={<Disorders />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/trackItems" element={<TrackItems />} />
            <Route path="/dailyNotes" element={<DailyNotes />} />
            <Route path="/nutritionTracker" element={<NutritionTracker />}></Route>

            <Route path="/checkList" element={<CheckList />} />
            <Route path="/evaluation" element={<Evaluation />} />

          </Routes>

        </div>


      </AppContext.Provider>
    </div>
  );
}

export default App;
