import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddMealPlan from './MealPlan/AddMealPlan';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/addmealplan" element={<AddMealPlan/>}/>
      </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
