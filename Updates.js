import React from "react";
import { GeoMap } from "@nivo/geo";

const CustomerReview = () => {
  // Sample data for geo map
  const geoData = [
    { "id": "AFG", "value": 20 },
    { "id": "ALB", "value": 40 },
    // Add more geo data as needed
  ];

  return (
    <div className="CustomerReview">
      <h2>Customer Review Geo Map</h2>
      <div style={{ height: '500px' }}>
        <GeoMap
          width={800}
          height={500}
          features={[]}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          projectionScale={140}
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          fillColor="#eeeeee"
          borderWidth={0.5}
          borderColor="#333333"
          enableGraticule={true}
          graticuleLineColor="#dddddd"
          graticuleLineWidth={0.5}
          enableMarkers={true}
          markerComponent={({ feature }) => (
            <circle r={5} fill="#f00" stroke="#fff" strokeWidth={2} />
          )}
          markers={[]}
          theme={{
            background: '#ffffff',
            fontFamily: 'Arial',
            fontSize: 12,
            textColor: '#333333',
          }}
          data={geoData}
        />
      </div>
    </div>
  );
};git

export default CustomerReview;
