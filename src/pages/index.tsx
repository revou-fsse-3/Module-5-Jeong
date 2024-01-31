import Image from "next/image";

import { Navbar } from "../components"

const inter = "'Inter', sans-serif";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/_tiles/sv/sv045/launch/sv045-launch-169-en.png"
          alt="Pokemon Image"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/pokemon-go/2024/01262024/02/pokemon-go-169.png"
          alt="Pokemon Image"
        />
      </div>
    </div>
  );
}
