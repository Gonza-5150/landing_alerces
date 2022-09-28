import './App.css';
import alerces_5 from "./assets/alerces_5.png";
import alerces_4 from "./assets/alerces_4.jpg";
import alerces_3 from "./assets/alerces_3.jpg";
import alerces_2 from "./assets/alerces_02.jpg";
import alerces_1 from "./assets/alerces_01.jpg";
import Hero from "./components/Hero.js";
import Slider from './components/Slider';


function App() {
  return (
    <div className="App">
      <Hero imageSrc={alerces_5} />
      <Slider imageSrc={alerces_1}
        title={'Se un explorador'}
        subtitle={'La mejor experiencia con la naturaleza.'} />
      <Slider imageSrc={alerces_3}
        title={'Aire Libre'}
        subtitle={'Deportes, travesias, campings, todo lo que necesitas.'}
        flipped={true} />
      <Slider imageSrc={alerces_2}
        title={'Visitanos'}
        subtitle={'Tus vacaciones ideales están a un solo click.'} />
    </div>
  );
}

export default App;
