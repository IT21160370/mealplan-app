import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditMealPlan from './MealPlan/EditMealPlan';
import CreateMealPlan from './MealPlan/CreateMealPlan';
import ViweMealPlan from './MealPlan/ViweMealPlan';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/createmealplan" element={<CreateMealPlan />}/>
        <Route exact path="/editmealplan/:id" element={<EditMealPlan />}/>
        <Route exact path="/viewmealplan/:id" element={<ViweMealPlan />} />
      </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
