
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    const maxBudget = 20000
    const { budget, remaining, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        if (event.target.value > maxBudget){
            alert("The budget cannot exceed " + currency + maxBudget + "!");
        }else if (event.target.value < (budget - remaining)) {
            alert("You cannot reduce budget to less than spending");
        }else{
          setNewBudget(event.target.value);
        }
    }
    return (
        <div className='alert alert-secondary'>
            <label htmlFor='budget'>Budget: {currency}</label>
            <input
                id={'budget'}
                style={{ marginLeft: 0, width: 200 }}
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;