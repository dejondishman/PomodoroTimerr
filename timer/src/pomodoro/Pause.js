import React from "react"

export default function Pause({pause}){
    if(pause){
        return <h3>paused</h3>
    }
    return null;
}