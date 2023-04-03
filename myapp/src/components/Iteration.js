import React, { useState } from 'react';

const Iteration = () => {

    const [names, setNames] = useState([
        {id : 1, text : "winter"},
        {id : 2, text : "karina"},
        {id : 3, text : "chaewon"},
        {id : 4, text : "yena"},
    ])

    const [inputText, setInputText] = useState("");
    const [nextID, setNextID] = useState(5);

    const onChange = (e) => setInputText(e.target.value)

    const onClick = () => {
        const nextNames = names.concat({
            id : nextID, text : inputText
        })
        setNames(nextNames)
        setNextID(nextID + 1);
        setInputText("")
    }

    const remove = (id) =>{
        const nextNames = names.filter((name) => name.id !== id)
        setNames(nextNames);
    }

    const nameList = names.map(name => <li key={name.id} onDoubleClick={()=>remove(name.id)}>{name.text}</li>)

    return (
        <div>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>Add</button><br/>
            <ul>
                {nameList}
            </ul>
        </div>
    );
};

export default Iteration;