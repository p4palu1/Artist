import logo from './logo.svg';
import Header from "./components/Header"
import './App.css';
import "./bootstrap.min (8).css"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import BioScreen from './screens/BioScreen';
import TalksScreen from './screens/TalksScreen';
import BodyGallery from './screens/BodyGallery';
import BWGallery from './screens/BWGallery';
import OilGallery from './screens/OilGallery';
import Footer from "./components/Footer"

function App() {
  return (
    <Router className="App">
      <Header />
      <Route path="/bio" component={BioScreen} exact/>
      <Route path="/talks" component={TalksScreen} exact/>
      <Route path="/gallery/body" component={BodyGallery} exact/>
      <Route path="/gallery/bw" component={BWGallery} exact/>
      <Route path="/gallery/oil" component={OilGallery} exact/>
      <Route path="/" component={HomeScreen} exact/>
      <Footer />
    </Router>
  );
}

export default App;
