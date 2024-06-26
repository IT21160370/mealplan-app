import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateMealPlan() {

    let navigate=useNavigate();
  
    const [mealplan, setMealPlan] = useState({
      MealPlanName: "",
      Ingredients: "",
      Calaries: "",
      Fat: "",
      Protein: "",
      ProtionSize: "",
      CookingInsractions: "",
    });
  
    const { MealPlanName, Ingredients, Calaries, Fat, Protein, ProtionSize, CookingInsractions} = mealplan;
  
    const onInputChange = (e) =>{
      setMealPlan({...mealplan,[e.target.MealPlanName]:e.target.value});
    };
  
    const onSubmit=async (e)=>{
      e.preventDefault();
      await axios.post("http://127.0.0.1:8080/mealplan",mealplan);
      navigate("/");
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Add Meal Plan</h2>
  
            <from onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="MealPlanName" className="form-label">
                  Meal Plan Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter Meal Plan Name"
                  name="MealPlanName"
                  value={MealPlanName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="Ingredients" className="form-label">
                  Ingredients
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Type Adding Ingredients"
                  name="Ingredients"
                  value={Ingredients}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="Calaries" className="form-label">
                  Calaries
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter Calaries"
                  name="Calaries"
                  value={Calaries}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="Fat" className="form-label">
                  Fat
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter Fat"
                  name="Fat"
                  value={Fat}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="Protein" className="form-label">
                  Protein
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter Protein value"
                  name="Protein"
                  value={Protein}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="ProtionSize" className="form-label">
                  Protion size
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter Protion size"
                  name="ProtionSize"
                  value={ProtionSize}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="CookingInsractions" className="form-label">
                Cooking insractions
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter Cooking insractions"
                  name="CookingInsractions"
                  value={CookingInsractions}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link type="submit" className="btn btn-outline-danger mx-2" to = "/">
                Cancel
              </Link>
              </from>
          </div>
        </div>      
      </div>
    );
  }

