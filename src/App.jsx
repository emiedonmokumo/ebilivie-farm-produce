import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from './components/About';
import Home from './pages/Home';
import Products from './components/Products';
import ModeProvider from './context/ModeProvider';
import Order from './components/Order';
import Admin from './components/Admin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AuthProvider from './context/AuthProvider';
import ProtectedRoute from './context/ProtectedRoute';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <ModeProvider>
          <Router>
            <Header />
            <div className="container mx-auto p-5">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/products' element={<Products />} />
                <Route path='/order/:id' element={<Order />} />
                <Route path='/about' element={<About />} />
                {/* <Route path='/admin' element={<Admin />} /> */}
                <Route element={<ProtectedRoute />}>
                  <Route path='/dashboard' element={<Dashboard />} />
                </Route>
              </Routes>
            </div>
            <Footer />
          </Router>
        </ModeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
