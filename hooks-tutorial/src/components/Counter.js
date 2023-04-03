import React, { useState, useReducer } from 'react';

// useReducer ver.
function reducer(state, action){
    // action, type에 따라 다른 작업 수행
    switch (action.type){
        case 'INCREMENT' : 
            return {value  : state.value + 1};
        case 'DECREMENT' : 
            return {value : state.value - 1};
        default : 
            return state;
    }
}

const Counter = () => {
    // ✅ useState ver.
    // const [value, setValue] = useState(0)
    // return (
    //     <div className='container'>
    //         <p>Counter : {value}</p>
    //         <button onClick={() => setValue(value + 1)}>+1</button>
    //         <button onClick={() => setValue(value - 1)}>-1</button>
    //     </div>
    // );
    
    // ✅ useReducer ver.
    const [state, dispatch] = useReducer(reducer, {value : 0});

    return (
        <div className='container'>
            <p>Counter : {state.value}</p>
            <button onClick={() => dispatch({type : 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type : 'DECREMENT'})}>-1</button>
        </div>
    );
};

export default Counter;