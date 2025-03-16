//import logo from './logo.svg';
import './App.scss';
import Profile from './Components/Home/Profile/Profile';
import Footer from './Components/Home/Footer/Footer';
import Home from './Components/Home/Home';
import {Education, Certifications, About, Header, Mainfooter, Skills, Testimonial, Work } from './containers'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Education />
      <Skills />
      <Certifications />
      <Work />
      <Testimonial />
      <Mainfooter />
    </div>
  );
}

export default App;
