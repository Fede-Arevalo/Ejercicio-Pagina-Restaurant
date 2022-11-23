import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="wrap">
        <div className="image-logo"></div>
        <div className="image-terraza"></div>
        <div className="text">
          <p>
            Un lugar de contrastes que espera al viajero con un encantador casco
            histórico junto con edificios futuristas. Más allá de la
            efervescencia cultural de sus calles, siempre apetece un paseo o un
            buen baño en sus playas mediterráneas. Por supuesto, es
            imprescindible probar su plato estrella, la paella (¡la auténtica!).
          </p>
          <hr width="100%" />
          <p>
            Y es que su luz mediterránea, su clima suave y el embrujo del fuego
            hacen de esta ciudad el mejor lugar para acompañar el deleite de
            nuestros platos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
