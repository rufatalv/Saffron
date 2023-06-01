import { Hero, Navbar, Features, Toolbar, Products, Services } from "./components";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Toolbar />
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Services />
    </div>
  );
}

export default App;
