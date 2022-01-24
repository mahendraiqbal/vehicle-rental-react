import React from "react";

function Card(props) {
  console.log(props)
  return(
  <>
    <div class="img-container">
      <div class="img-gallery">
        <a href={`/vehicle/detail/${props.id}`}>
          <img src={props.image} alt="vehicle" />
          <figcaption>
            <h4>{props.name}</h4>
            <p>{props.city}</p>
          </figcaption>
        </a>
      </div>
    </div>
  </>
  );
}

export default Card;
