import {createAction, handleActions} from "redux-actions";


// ACTION TYPE 정의하기
const INCREASE = "counter/INCREASE"; // 모듈이름 / 액션이름
const DECREASE = "counter/DECREASE";
const INPUT_CHANGE = 'counter/INPUT_CHANGE';
const CHANGE_NAME = 'counter/CHANGE_NAME';

// export const increase = () => ({type : INCREASE});
// export const decrease = () => ({type : DECREASE});

//ACTION TYPE 반환하는 함수 만들어주기
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const inputChange = createAction(INPUT_CHANGE, input => input);
export const changeName = createAction(CHANGE_NAME, name=> name);

const initialState = {
    number : 0,
    name:"평범한 카운터",
    inputName: ""
}

// Reducer 함수는 이전 상태와 액션 객체를 파라미터로 받는다.
// 파라미터 외의 값에는 의존하면 안된다
// 이전 상태는 절대로 건드리지 않고 변화를 준 새로운 상태 객체를 만들어서 반환한다.
// 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야 한다.

// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE :
//             return {
//                 number : state.number + 1
//             };
            
//         case DECREASE : 
//             return {
//                 number : state.number - 1
//             };
//         default :
//             return state;
//     }
// }

const counter = handleActions(
    {
        [INCREASE] : (state,action) =>({
            number: state.number + 1
        }),
        [DECREASE]: (state,action) => ( {
            number : state.number - 1
        }),
        [INPUT_CHANGE]: (state, {payload: input}) => ({
            ...state,
            inputName: input
        }),
        [CHANGE_NAME]: (state,{payload:name}) => ({
            ...state,
            name: name
        }
    },
    initialState
);


export default counter;