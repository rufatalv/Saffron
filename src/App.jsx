import {
  Hero,
  Navbar,
  Features,
  Toolbar,
  Products,
  Services,
  Preloader,
  LatestProducts,
} from "./components";
import "react-loading-skeleton/dist/skeleton.css";
function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Preloader />
      <Toolbar />
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Services />
      <LatestProducts />
    </div>
  );
}

export default App;
