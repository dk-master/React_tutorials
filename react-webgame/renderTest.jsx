import React, {Component} from 'react';

class Test extends Component {
    state = {
        counter : 0
    }

    shouldComponentUpdate(nextProps,nextState,nextContext) {
        //렌더처럼 리액트에서 지원하는 메서드  직접 어떤경우에 렌더링을 해줘야할지 적어줘야한다
        if(this.state.counter !== nextState.counter) { // 현재의 카운터가 미래의 바뀌는 카운터와 다르면 랜더링해줘야한다.
            return true;
        }
        return false;
    }
    onClick = () => {
        this.setState ( {

        })
    }
    render() {
        console.log("랜더링", this.state);
        return ( <div>
            <button onClick = {this.onClick}>클릭!</button>
        </div>)
    }
}