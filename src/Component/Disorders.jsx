import { Link, useNavigate } from "react-router-dom";

import React, { useContext } from "react";
import { AppContext } from "../App";

function Disorders() {
  const navigate = useNavigate();
  const {
    disorders,
    setDisorders,
    trackItems,
    tracks,
    setTrackItems,
    setTracks,
    setdisorder,
  } = useContext(AppContext);

  function clickHander(e) {
    let result = disorders.find((i) => (i.id == e.target.name));
    setdisorder(result);

    navigate("/tracks");
  }

  return (
    <div className="disorders">
      <ul>
        {disorders.map((i) => (
          <>
            <li>
              <button name={i.id} onClick={clickHander}>
                {i.disorder}
              </button>
            </li>
          </>
        ))}
        
      </ul>
    </div>
  );
}

export default Disorders;
