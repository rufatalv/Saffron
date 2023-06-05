import { useEffect, useState } from "react";
import {
  Hero,
  Navbar,
  Features,
  Toolbar,
  Products,
  Services,
  LatestProducts,
  Partners,
  Preloader,
  Footer,
  Contacts,
} from "./components";
import "react-loading-skeleton/dist/skeleton.css";
function App() {
  const [loading, setLoading] = useState(true);
  if (loading === true) {
    document.body.classList.add("locked");
  } else {
    document.body.classList.remove("locked");
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="relative overflow-x-hidden">
      <Preloader isLoading={loading} />
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
