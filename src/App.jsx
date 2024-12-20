import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import AuthProvider from './context/AuthProvider';
import ProtectedRoute from './context/ProtectedRoute';


function App() {
  return (
    <AuthProvider>
      <ModeProvider>
        <Router>
          <AppContent />
        </Router>
      </ModeProvider>
    </AuthProvider>
  );
}

function AppContent() {
  const location = useLocation();

  // Array of paths where Header and Footer should not be displayed
  const noHeaderFooterRoutes = ['/dashboard', '/task', '/animal', '/crop', '/newcrop'];

  // Check if the current pathname is one of the specified routes or starts with '/crop/' for dynamic segments
  const isNoHeaderFooterRoute = noHeaderFooterRoutes.includes(location.pathname) || location.pathname.startsWith('/crop/');

  return (
    <div className="App">
      {/* Conditionally render Header */}
      {!isNoHeaderFooterRoute && <Header />}
      <div className="container mx-auto p-5">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/products' element={<Products />} />
          <Route path='/order/:id' element={<Order />} />
          <Route path='/about' element={<About />} />
          {/* Uncomment if you want to use the Admin route */}
          {/* <Route path='/admin' element={<Admin />} /> */}
        </Routes>
      </div>
      {/* Conditionally render Footer */}
      {!isNoHeaderFooterRoute && <Footer />}
    </div>
  );
}

export default App;
