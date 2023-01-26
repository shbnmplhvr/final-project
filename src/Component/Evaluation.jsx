import React from 'react'

import { useContext } from 'react'
import { AppContext } from '../App'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
function Evaluation() {
  const {disorder,setdisorder,trackItems}=useContext(AppContext)
  const navigate = useNavigate()
 
console.log(disorder);
  return (
    
     
    <div className="evaluation">
      <h2>evaluation</h2>
      <ul>
        {trackItems.filter(i => i.track_id== disorder.id).map(i => (
          <>
            <li>
              <button name={i.track_id} >
                {i.name}
              </button>
              <input type="number"/>
            </li>
          </>
        ))}
      </ul>
     
        
      
      
    </div>
  )
}

export default Evaluation