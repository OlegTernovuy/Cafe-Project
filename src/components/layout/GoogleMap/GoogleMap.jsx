import React from "react";
import GoogleMapReact from "google-map-react";
import { LocationPin } from "./LocationPin";

export const GoogleMap = ({ location, zoomLevel }) => {
  return (
    <div className="map">

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
  );
};
