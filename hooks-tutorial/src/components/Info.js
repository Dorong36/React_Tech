import React, { useEffect, useState, useReducer } from 'react';
import useInput from './useInput';

const Info = () => {
    // ✅ useState ver.
    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('')

    // useEffect(()=>{
    //     console.log('effect');
    //     console.log(name)
    //     return () => {
    //         console.log('clean up')
    //         console.log(name)
    //     }
    // }, [])

    // const onChangeName = e => {
    //     setName(e.target.value)
    // }

    // const onChangeNickname = e => {
    //     setNickname((e.target.value))
    // }

    // return (
    //     <div>
    //         <input value={name} onChange={onChangeName}></input>
    //         <input value={nickname} onChange={onChangeNickname}></input>
    //         <div>
    //             <div>
    //                 <b>name : {name}</b>
    //             </div>
    //             <div>
    //                 <b>nickname : {nickname}</b>
    //             </div>
    //         </div>
    //     </div>
    // );



    // ✅ useReducer ver.
    const [state, onChange] = useInput({
        name : '',
        nickname : ''
    })
    const {name, nickname} = state;

    return (
        <div>
            <input name="name" value={name} onChange={onChange}></input>
            <input name="nickname" value={nickname} onChange={onChange}></input>
            <div>
                <div>
                    <b>name : {name}</b>
                </div>
                <div>
                    <b>nickname : {nickname}</b>
                </div>
            </div>
        </div>
    );
};

export default Info;