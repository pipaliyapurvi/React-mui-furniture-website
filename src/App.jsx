import logo from './logo.svg';
import './App.css';
import Topheder from './Topheder';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Main from './Main';
import Img1 from './Img1';
import Img2 from './Img2';
import Outoplayslider from './Outoplayslider';
import Customers from './Customers'
import Hovercard from './Hovercard';

function App() {
  return (
    <>
      <Topheder></Topheder>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Main></Main>
      <Img1></Img1>
      {/* <Img2></Img2> */}
      <Outoplayslider></Outoplayslider>
      <Customers></Customers>
      <Hovercard></Hovercard>
      
    </>
  );
}

export default App;
