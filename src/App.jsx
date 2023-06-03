import {
  Hero,
  Navbar,
  Features,
  Toolbar,
  Products,
  Services,
  LatestProducts,
  Partners,
  Footer,
  Contacts,
} from "./components";
import "react-loading-skeleton/dist/skeleton.css";
function App() {
  return (
    <div className="relative overflow-x-hidden">
      {/* <Preloader />  */}
      <Toolbar />
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Services />
      <LatestProducts />
      <Partners />
      <Contacts />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
