import './App.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Homes from './Components/Homes';
import Liokotre from './Components/Liokotre';
import Select from './Components/Select';
import Testimonial from './Components/Testimonial';

function App() {
  return (
    <div className="App bg-black">
       <Hero/>
       <Select/>
       <Liokotre/>
       <Homes/>
       <Testimonial/>
       <Footer/>
    </div>
  );
}

export default App;
