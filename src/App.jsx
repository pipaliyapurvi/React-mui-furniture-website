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
import ShopCategory from './ShopCategory'
import Email from './Email'
import Footer from './Footer'
import PgShop from './PgShop';
import PgContact from './PgContact';
import PgBlog from './PgBlog';
import PgCollection from './PgCollection';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Furniture from './Furniture';



function App() {
  return (
    <>
      {/* <Topheder></Topheder>
      <Header></Header> */}
      {/* <Hero></Hero>
      <About></About>
      <Main></Main>
      <Img1></Img1>
      <Img2></Img2>
      <Outoplayslider></Outoplayslider>
      <Customers></Customers>
      <Hovercard></Hovercard>
      <ShopCategory></ShopCategory>
      <Email></Email>
      <Footer></Footer> */}
      {/* <PgShop></PgShop> */}
      {/* <PgBlog></PgBlog> */}
      {/* <PgCollection></PgCollection> */}
      {/* <PgContact></PgContact> */}

      <Router>

        <Switch>
          <Route exact path="/">
            <Furniture />
          </Route>
          <Route path="/shop">
            < PgShop />
          </Route>
          <Route path="/collection">
            <PgCollection />
          </Route>
          <Route path="/blog">
            <PgBlog />
          </Route>
          <Route path="/contact">
            <PgContact />
          </Route>
        </Switch>
      </Router>

    </>
  );
}



export default App;
