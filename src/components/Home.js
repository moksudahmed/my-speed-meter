import React from "react";
import ConnectionSpeed from "./ConnectionSpeed";
import './../assets/styles.css'

const HomePage = () => {
    return(
        <div className='home-container'>
            <h2>Internet Speed Meter App</h2>
            <p>Measure the internet speeds of your internet connection, expressed in Megabits per second (Mbps).</p>
            <ConnectionSpeed />      
        </div>
    )
}


export default HomePage