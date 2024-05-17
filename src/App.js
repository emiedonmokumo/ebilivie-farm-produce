import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './components/Home';
import Products from './components/Products';
import ModeProvider from './components/ModeProvider';
import Order from './components/Order';
import Admin from './components/Admin';

function App() {
  
  return (
    <div className="App">
      <ModeProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/order/:id' element={<Order />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
          <Footer />
        </Router>
      </ModeProvider>
    </div>
  );
}

export default App;
