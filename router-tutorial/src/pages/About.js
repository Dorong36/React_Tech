import React, { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
    const location = useLocation(); 
    // location.search로 쿼리스트링 조회 가능
    
    // useSearchParams 사용하기
    const [searchParams, setSearchParams] = useSearchParams();
    /*
    [
        쿼리파라미터 조회나 수정하는 메서드들이 담긴 객체,
        쿼리파라미터 객체 형태로 업데이트 할 수 있는 함수
    ]
    */
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({mode, detail : detail === 'true' ? false : true})
    }

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1: parseInt(mode) + 1;
        setSearchParams({mode : nextMode, detail})
    }

    return (
        <div>
            <h1>About</h1>
            <p>This is router practice site!!</p>
            <p>QueryString : {location.search}</p> 
            <br/><br/>
            <p>detail : {detail}</p>
            <p>mode : {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};

export default About;