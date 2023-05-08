import React from "react";
import "../../node_modules/react-internet-meter/dist/index.css";
import { ReactInternetSpeedMeter } from "react-internet-meter";
import SpeedMeter from "./SpeedMeter";
import './../assets/styles.css'

function ConnectionSpeed() {
  const [wifiSpeed, SetCheckSpeed] = React.useState(
    0
  );
  return (
    <div className="card-container">
      <ReactInternetSpeedMeter
        txtSubHeading="Internet connection is slow"
        outputType="" // "alert"/"modal"/"empty"
        customClassName={null}
        pingInterval={2000} // milliseconds
        txtMainHeading="Opps..."
        thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
        threshold={50}
        imageUrl="https://i.postimg.cc/J0rGHpFG/pexels-pixabay-60597.jpg"
        downloadSize="1561257" //bytes
        callbackFunctionOnNetworkDown={(data) =>
          console.log(`Internet speed : ${data}`)
        }
        callbackFunctionOnNetworkTest={(data) => SetCheckSpeed(data)}
      />
       <div>
       <SpeedMeter wifiSpeed= {Number(wifiSpeed)} connection={100} />
       </div>
          
    </div>
  );
}
export default ConnectionSpeed;