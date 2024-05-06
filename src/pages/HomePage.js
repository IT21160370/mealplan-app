import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomePage() {

  const [users, setUsers] = useState([]);

    useEffect(() => {
      loadUsers();
    });

    const loadUsers  = async () => {
        const result = await axios.get("http://localhost:8090/api/v1/Meal-plan/getMeal-plan");
        setUsers(result.data);
    }
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
  
    {users.map((user, index) => (
    <tr>
      <th scope="row" key={index}>
                  {index + 1}
                </th>
      <td>{user.MealPlanName}</td>    
      <td>{user.Ingredients}</td>
      <td>{user.Calaries}</td>
      <td>{user.Fat}</td>
      <td>{user.Protein}</td>
      <td>{user.ProtionSize}</td>
      <td>{user.CookingInsractions}</td>
      <td>
        <button className="btn btn-primary mx-2">Viwe</button>
        <button className="btn btn-outline-primary mx-2">Edit</button>
        <button className="btn btn-danger mx-2">Delete</button>
      </td>
    </tr>
    ))
  } 
  </tbody>
</table>
        </div>
    </div>
  )
}
