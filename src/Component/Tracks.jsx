import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

function Tracks() {
  const navigate = useNavigate();
  const { tracks, disorder, trackId, setTrackId } = useContext(AppContext);
  console.log(disorder);

  function clickHandler(e) {
    setTrackId(e.target.name);
    navigate("/trackItems");
  }
  return (
    <div className="Tracks">
      <ul>
      <li>
         <button>
                <Link to={"/NutritionTracker"}>Nutrition Tracker</Link>
              </button>
        </li>
        {tracks
          .filter((i) => i.disorder_id == disorder.id)
          .map((i) => (
            <li>
              <button name={i.id} onClick={clickHandler}>
                {i.name}
              </button>
            </li>
           
          ))}
        
      </ul>
    </div>
  );
}

export default Tracks;
