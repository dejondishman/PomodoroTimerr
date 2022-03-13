import React from 'react'
import Pause from './Pause.js'
import { secondsToDuration, minutesToDuration } from '../utils/duration/index.js';

export default function Session({Currentsession, stop, pause, breakDuration, focusDuration}){
    if(stop){
        return null;
    }

    const duration =  Currentsession?.label==="Focusing" ? focusDuration : breakDuration

 return(
    <div>
    {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
    <div className="row mb-2">
      <div className="col">
        {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
        <h2 data-testid="session-title">
          {Currentsession?.label} for {minutesToDuration(duration)} minutes
        </h2>
        {/* TODO: Update message below correctly format the time remaining in the current session */}
        <p className="lead" data-testid="session-sub-title">
          {secondsToDuration(Currentsession?.timeRemaining)} remaining
        </p>
      </div>
    </div>
    <Pause pause={pause}/> 
    <div className="row mb-2">
      <div className="col">
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="0" // TODO: Increase aria-valuenow as elapsed time increases
            // ) 
           style={{ width: `${100-( (100*Currentsession?.timeRemaining) / (duration * 60))}%`}}
          />
        </div>  
      </div>
    </div>
  </div>
 )
}
 

