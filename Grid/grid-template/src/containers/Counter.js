import React from "react";
import Counter from '../components/Counter';
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
    // number을 사용하는 방법
    const counterNum = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(()=> dispatch(increase()), [dispatch]); // useCallback 사용하는 이유는 숫자가 바뀔때마다 컴포넌트가 리렌더링 돼서 매번 함수를 새로 만드므로
    const onDecrease = useCallback(()=> dispatch(decrease()), [dispatch]);
    return (<Counter number={counterNum} onIncrease={onIncrease} onDecrease={onDecrease}/>);
}

export default Counter;