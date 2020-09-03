import React from 'react';

const Try = ({tryInfo}) => {    // 여기서  tryInfo를 구조분해 안하고 싶으면 props로 쓰고 tryinfo.try -> props.tryInfo.try 이런식으로 해준다.
    return ( 


        <li>

            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
};

export default Try;