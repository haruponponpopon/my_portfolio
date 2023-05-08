import './App.css';
import {useEffect} from 'react'
import Navbar from './components/Navbar';
import Hiro from './components/Hiro';
import Skills from './components/Skills'
import Experiences from './components/Honors';
import Certs from './components/Certs';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    useEffect(() => {
      document.title = 'Haruka Kobayashi';
      AOS.init();
    }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <Hiro />
      <Skills />
      <Experiences />
      <Certs />
      <Footer />
    </div>
  );
}

export default App;
