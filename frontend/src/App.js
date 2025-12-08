import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import ShowcaseGrid from "./component/ShowcaseGrid";
import PricingPage from "./component/PricingPage";
import AboutPage from './component/About';
import DirectFarmPage from './component/DirectFarmPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ShowcaseGrid />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/templates/direct-farm" element={<DirectFarmPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;