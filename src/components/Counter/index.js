import { h, Component } from 'preact';
import style from './style';

const Counter = (props) => {
    return (
        <div>
            <p>Testing Counter</p>
            <p>{props.initValue}</p>
            <a class={style.basebtn + ' ' + style.default} onclick={props.incrCounter}>
                Incr Counter
            </a>
            <a class={style.basebtn + ' ' + style.default}>
                Decr Counter
            </a>
        </div>
        
    )
};

export default Counter;