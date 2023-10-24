import React from "react";


export default function CreateLocation() {
  return (

    <div className="location-container">
    <a className="maps-link" href="link-to-location">
      <img className="location-image" src="images/decorations/location.jpg" />
    </a>

    <div className="cutaway-holder-container">

      <div className="cutaway-container">
        <div className="cutaway-info-container">

          <div className="name-container">
            Drink&Food
          </div>
          <div className="tagline-container">
            Де люди приходять поїсти
          </div>

          <div className="contacts-location-container">
            <div className="location-text-container">
              Пр. Соборний 4-б
            </div>
            <div className="contacts-container">
              Номер
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}