import { useState } from "react";

function App() {
  const [degree, setDegree] = useState(0);
  const rotateHandler = () => setDegree(degree + 90);
  return (
    <div className="image-rotation">
      <h2>Image Rotation</h2>
      <img
        style={{
          transform: `rotate(${degree}deg)`,
          height: "150px",
          width: "150px",
        }}
        src="https://imgs.search.brave.com/PXviRQ988K703OCAMhtHIy3ET6ukkIgQlzTpDaS-5VI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvZHY3/NDEwNjMvcGhvdG8v/Ym91bmNlci13ZWFy/aW5nLXN1bmdsYXNz/ZXMtd2l0aC1hcm1z/LWNyb3NzZWQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVlF/ajQ5ZXZWLW5KX0Fm/UlJnRzhuUHlsUUE5/dGZMRURiY0pnVG5R/WjY5bG89"
        alt="img-here"
      />
      <br />
      <button onClick={rotateHandler}>Rotate</button>
    </div>
  );
}

export default App;
