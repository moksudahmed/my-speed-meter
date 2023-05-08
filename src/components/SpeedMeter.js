import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import './../assets/styles.css'

function SpeedMeter({ wifiSpeed, connection }) {
  
  return (
    <div>
         <ReactSpeedometer
          maxValue={connection}
          value={wifiSpeed}
          currentValueText={wifiSpeed + ' MB/s'}
          needleColor="red"
          startColor="green"
          segments={5}
          endColor="blue"
          textColor='#AAA'
        />      
    </div>
    
  );
}

export default SpeedMeter;
