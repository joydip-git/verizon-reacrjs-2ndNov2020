import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import DashBoard from '../../components/Common/DashBoard/DashBoard';
import ProductRoutes from '../../routes/ProductRoutes';


function App() {
  return (
    <Router>
      <div className="App">
        <DashBoard />
        <ProductRoutes />
      </div>
    </Router>
  );
}

export default App;
