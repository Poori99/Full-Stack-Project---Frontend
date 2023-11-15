import './App.css';
import Navbar from './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#EEEEEE', minHeight: '100vh' }}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
