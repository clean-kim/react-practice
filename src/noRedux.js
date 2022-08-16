import {useRef} from "react";
import {createStore} from "redux";


export default function NoRedux() {
    const divToggle = useRef(null);
    const counter = useRef(null);
    const btnIncrease = useRef(null);
    const btnDecrease = useRef(null);

    const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
    const INCREASE = 'INCREASE';
    const DECREASE = 'DECREASE';

    const toggleSwitch = () => ({type: TOGGLE_SWITCH});
    const increase = difference => ({type: INCREASE, difference});
    const decrease = () => ({type: DECREASE});

    const initialState = {
        toggle: false,
        counter: 0
    };

    function reducer(state = initialState, action) {
        switch (action.type) {
            case TOGGLE_SWITCH:
                return {
                    ...state,
                    toggle: !state.toggle
                };
            case INCREASE:
                return {
                    ...state,
                    counter: state.counter + action.difference
                };
            case DECREASE:
                return {
                    ...state,
                    counter: state.counter - 1
                };
            default:
                return state;
        }
    }

    const store = createStore(reducer);

    const render = () => {
        const state = store.getState();

        if(state.toggle) {
            console.log('divToggle add active');
        } else {
            console.log('divToggle remove active');
        }
        counter.innerText = state.counter;
    }
    render();
    store.subscribe(render);

    return (
        <div>
            <div ref={divToggle} className={'toggle'} onClick={() => store.dispatch(toggleSwitch())}></div>
            <hr/>
            <h1 ref={counter}>0</h1>
            <button id="increase" ref={btnIncrease} onClick={() => store.dispatch(increase(1))}>+1</button>
            <button id="decrease" ref={btnDecrease} onClick={() => store.dispatch(decrease())}>-1</button>
        </div>
    )
}