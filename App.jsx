import About from "./components/About.jsx";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Interest from "./components/Interest";

export default function App() {
  return (
    <div className="container">
      <Detail />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
