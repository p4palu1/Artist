import logo from './logo.svg';
import Header from "./components/Header"
import './App.css';
import "./bootstrap.min (8).css"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import BioScreen from './screens/BioScreen';
import Gallery from './screens/Gallery';
import Repertoire from './screens/Repertoire';
import Footer from "./components/Footer"

function App() {
  return (
    <Router className="App">
      <Header />
      <Route path="/bio" component={BioScreen} exact/>
      <Route path="/repertoire" component={Repertoire} exact/>
      <Route path="/" component={HomeScreen} exact/>
      <Footer />
    </Router>
  );
}

export default App;
