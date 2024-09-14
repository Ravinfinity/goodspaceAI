import "./App.scss";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Carousel } from "./components/Carousel";
import { Features } from "./components/features/Features";
import { Integrations } from "./components/integrations/Integrations";
import { Reviews } from "./components/reviews/Reviews";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Carousel />
      <Features />
      <Integrations />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
