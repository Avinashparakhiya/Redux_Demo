import React from 'react';
import changeNumber from './Reducers';
import { incNumber, decNumber } from './Actions/index';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="container"
        style={{ justifyContent: 'center', marginLeft: '884px' }}
      >
        <h1>Increment and Decrement</h1>
        <div className="quantity">
          <a
            href
            className="quantity_minus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
            style={{ cursor: 'pointer', justifyContent: 'center' }}
          >
            <span> - </span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <a
            href
            className="quantity_plus"
            title="Increment"
            style={{ cursor: 'pointer', justifyContent: 'center' }}
            onClick={() => dispatch(incNumber())}
          >
            <span> + </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
