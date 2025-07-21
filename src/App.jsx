import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Footer from "./components/Footer.jsx";
import Interest from "./components/Interest.jsx";

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
