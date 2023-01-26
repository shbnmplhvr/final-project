import React from 'react'
import "./NutritionTracker.css"
import { useState } from 'react'
function NutritionTracker() {


  const [nutrition, setNutrition] = useState("")
  const [nutritions, setNutritions] = useState([])
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(nutrition !== ""){
      setNutritions([])
      setNutritions([{id:`${nutrition}-${Date.now()}`,nutrition},...nutritions])
      setNutrition("")
    }

    
  }
  return (
    <div className="NutritionTrack">
      <div className="NTcontainer">
        <h1>Nutrition Track App</h1>
        <form className="NTform" action="" onSubmit={handleSubmit}>
          <input className="NTinput" type="text" value={nutrition} onChange={(e)=> setNutrition(e.target.value)}/>
          <button className="NTbutton" type="submit">add</button>
        </form>

        <ul className="allNT">
          {nutritions.map((i) => (
          <li className="singleNT">
             <span className="textNT" key={i.id}>{i.nutrition}</span>
            
            
          </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default NutritionTracker