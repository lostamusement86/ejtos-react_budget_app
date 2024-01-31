import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../css/currency.css'

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    return (
        <div className="alert currency"> Currency {
            <select
                name="currency"
                id="currency"
                className="currency"
                value={currency.value}
                onChange={event =>
                    dispatch({
                        type: 'CHG_CURRENCY',
                        payload: event.target.value,
                    })
                }
            >
                <option className="option" value="£">£ Pound</option>
                <option className="option" value="$">$ Dollar</option>
                <option className="option" value="€">€ Euro</option>
                <option className="option" value="₹">₹ Ruppee</option>
            </select>
        }
        </div>
    );
};
export default Currency;