import React from "react";

import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

function CheckList() {
  const navigate = useNavigate();
  const { disorder, trackItems, setTrackItems } = useContext(AppContext);

  

  return (
    <div className="checkList">
      <h2>checkList</h2>

      <ul>
        {trackItems.filter(i => i.track_id== disorder.id).map(i => (
          <>
            <li>
              <button name={i.track_id} >
                {i.name}
              </button>
              <input type="checkbox"/>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default CheckList;
