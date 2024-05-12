import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViweMealPlan() {

    const [mealplan,setMealPlan] = useState({
        mealplannme:"",
        ingredients:"",
        calaries:"",
        fat:"",
        Protein:"",
        protionsize:"",
        cookinginsractions:"",
    });

    const { id }=useParams();

    useEffect(() => {
        loadMealPlan();
    }, [ ]);

    const loadMealPlan=async ()=>{
        const result = await axios.get(`http://127.0.0.1:8080/mealplan/${id}`);
    setMealPlan(result.data);
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Meal Plan Details</h2>

                <div className='card'>
                    <div className='card-header'>
                        Details of meal plan id : {mealplan.id}
                        <ui className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>MealPlanName:</b>
                                {mealplan.mealplannme}
                            </li>

                            <li className="list-group-item">
                                <b>Ingredients:</b>
                                {mealplan.ingredients}
                            </li>

                            <li className="list-group-item">
                                <b>Calaries:</b>
                                {mealplan.calaries}
                            </li>

                            <li className="list-group-item">
                                <b>Fat:</b>
                                {mealplan.fat}
                            </li>

                            <li className="list-group-item">
                                <b>Protein:</b>
                                {mealplan.Protein}
                            </li>

                            <li className="list-group-item">
                                <b>ProtionSize:</b>
                                {mealplan.protionsize}
                            </li>

                            <li className="list-group-item">
                                <b>CookingInsractions:</b>
                                {mealplan.cookinginsractions}
                            </li>

                            
                        </ui>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>Back TO Home</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
