import React from "react";


export default function CreateLocation(props) {
  const { name, tagline, location, contacts } = props;

  const locationHTML = (

    <div className="location-container">
    <a className="maps-link" href="link-to-location">
      <img className="location-image" src="images/decorations/location.jpg" />
    </a>

    <div className="cutaway-holder-container">

      <div className="cutaway-container">
        <div className="cutaway-info-container">

          <div className="name-container">
            {name}
          </div>
          <div className="tagline-container">
            {tagline}
          </div>

          <div className="contacts-location-container">
            <div className="location-text-container">
              {location}
            </div>
            <div className="contacts-container">
              {contacts}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );

  return locationHTML;
}