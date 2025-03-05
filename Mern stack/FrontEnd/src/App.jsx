import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar is outside Routes so it stays persistent across pages */}
        <Navbar />
        
        <div className="pages">
          <Routes>
            {/* Define the route for the Home page */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
