import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';

function TrackItems() {
    const { tracks, disorder, trackId,setTrackId, trackItems } = useContext(AppContext);

  return (
    <div className='TrackItems'>
    
        {trackItems.filter(i => i.track_id == trackId).map(i => 
        <ul>
            <li>
        <h2>{i.name}</h2>
        <input type="checkbox"/>
        </li>
        </ul>
        )}
        
        
    </div>
  )
}

export default TrackItems