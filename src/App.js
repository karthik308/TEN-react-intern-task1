/* eslint-disable */
import './App.css';
import Aboutus from './component/aboutus';
import Carouselblock from './component/carouselblock';

import Footer from './component/footer/footer';
import Introimg from './component/introimg';
import Data from './component/data';
import Video from './component/video';
import Discord from './component/discord';
import Card from './component/card'
import Segmentcontainer from './component/segmentcontainer';
import Header from './component/header/headerindex';
function App() {
  return (
    <div id='start' >
      <Header />
      <Introimg />
      <Aboutus />
      

      <div className='bodyofpage'>
      <Discord />
      <Segmentcontainer />
      <Data />
      <Carouselblock />
      </div>
      <Video />
      <Footer />

    </div>
  );
}

export default App;
