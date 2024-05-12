import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomePage() {

  const [mealplan, setMealPlan] = useState([]);

    useEffect(() => {
      loadMealPlan();
    }, []);

    const loadMealPlan  = async () => {
        const result = await axios.get("http://127.0.0.1:8080/mealplans");
        setMealPlan(result.data);
    };

    const DeleteMealPlan = async (id) => {
      await axios.delete(`http://127.0.0.1:8080/mealplan/${id}`);
      loadMealPlan();
    };

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Meal Plan id</th>
              <th scope="col">Meal Plan Name</th>
              <th scope="col">Ingredients</th>
              <th scope="col">Calaries</th>
              <th scope="col">Fat</th>
              <th scope="col">Protein</th>
              <th scope="col">Protion size</th>
              <th scope="col">Cooking insractions</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>  
  
    {mealplan.map((mealplan, index) => (
    <tr>
      <th scope="row" key={index}>
                  {index + 1}
                </th>
                    <td>{mealplan.MealPlanName}</td>    
                    <td>{mealplan.Ingredients}</td>
                    <td>{mealplan.Calaries}</td>
                    <td>{mealplan.Fat}</td>
                    <td>{mealplan.Protein}</td>
                    <td>{mealplan.ProtionSize}</td>
                    <td>{mealplan.CookingInsractions}</td>
                    <td>
        <Link
          className="btn btn-primary mx-2"
          to={`/viewmealplan/${mealplan.id}`}
        >
          View
        </Link>
        <Link 
        className="btn btn-outline-primary mx-2"
        to={`/editmealplan/${mealplan.id}`}
        >
          Edit
        </Link>
        <button className="btn btn-danger mx-2"
        onClick={()=>DeleteMealPlan(mealplan.id)}
        >Delete</button>
      </td>
    </tr>
    ))
  } 
  </tbody>
</table>
        </div>
    </div>
  );
}
