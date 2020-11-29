import React from "react";
import Counter from '../components/Counter';
import {useSelector, useDispatch} from 'react-redux';
import {increase,decrease,inputChange,changeName} from '../modules/counter';
const Counter = () => {
    // number을 사용하는 방법
    const {counterNum, name, inputName} = useSelector(({counter}) => ({
        counterNum : counter.number,
        name: counter.name,
        inputName: counter.inputName
    }))
    const dispatch = useDispatch();
    const onIncrease = useCallback(()=> dispatch(increase()), [dispatch]); // useCallback 사용하는 이유는 숫자가 바뀔때마다 컴포넌트가 리렌더링 돼서 매번 함수를 새로 만드므로
    const onDecrease = useCallback(()=> dispatch(decrease()), [dispatch]);
    const onInputChange = useCallback(input => dispatch(inputChange(input)), [
        dispatch
      ]);
      const onChangeName = useCallback(name => dispatch(changeName(name)), [
        dispatch
      ]);

   return (
    <Counter
      name={name}
      inputName={inputName}
      number={counterNum}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onChange={onInputChange}
      onChangeName={onChangeName}
    />
  );
};
export default React.memo(Counter);