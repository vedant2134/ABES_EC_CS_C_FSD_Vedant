import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div id="card">
      <img
        src="https://imgs.search.brave.com/PXviRQ988K703OCAMhtHIy3ET6ukkIgQlzTpDaS-5VI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvZHY3/NDEwNjMvcGhvdG8v/Ym91bmNlci13ZWFy/aW5nLXN1bmdsYXNz/ZXMtd2l0aC1hcm1z/LWNyb3NzZWQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVlF/ajQ5ZXZWLW5KX0Fm/UlJnRzhuUHlsUUE5/dGZMRURiY0pnVG5R/WjY5bG89"
        alt=""
        height={100}
        width={100}
      />
      <h2>{props.name}</h2>
      <h2>{props.edu}</h2>
    </div>
  );
}

export default Card;
