import React, { useReducer } from 'react';

const current = {
  name: 'Khaalid',
  age: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age
      };
    default:
      return state;
  }
}

function Assignment() {
  const [state, dispatch] = useReducer(reducer, current);

  const handleNameChange = (name, age) => {
    dispatch({ type: 'CHANGE_NAME', payload: { name, age } });
  };

  return (
    <div>
      <h2 style={{ fontSize: '16px', color: 'white' }}>Name: {state.name}   age: {state.age}</h2>
      <button style={{ backgroundColor: 'grey', color: 'white', padding: '10px', margin: '5px', borderRadius: '5px', border: 'none' }} onClick={() => handleNameChange('Mohamed', 30)}>  Mohamed</button><br />
      <button style={{ backgroundColor: 'grey', color: 'white', padding: '10px', margin: '5px', borderRadius: '5px', border: 'none' }} onClick={() => handleNameChange('Fartun', 25)}>  Fartun</button>
    </div>
  );
}

export default Assignment;