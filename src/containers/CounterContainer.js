import Counter from '../components/Counter';
import {increase, decrease} from '../modules/counter';
import {connect} from 'react-redux';

function CounterContainer({increase, decrease, number}) {
    return (<Counter
        number={number}
        onIncrease={increase}
        onDecrease={decrease}
    />);
}

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increase,
        decrease
    }
)(CounterContainer);