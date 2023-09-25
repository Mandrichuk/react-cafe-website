import React from "react";


export default function CreateCircules(props) {
  const { id, name, imageName } = props;

  const circule = (
    <div className={`white-circle-container white-circle-container-${id}`}>
      <img className={`product-image product-image-${id}`} src={`images/decorations/${imageName}`}    alt={`Product ${name}`} />
    </div>
  );

  return circule;
} 