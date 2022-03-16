// theirs
import { h, Component } from 'preact';

// ours
import SigninWidget from './signin';
import Counter from './Counter';

export default class Widget extends Component {
  state = {
    initialvalue: 10
  };
  static defaultProps = {
    title: 'no-title!',
    message: 'default prop'
  };
  incrementCounter = () => {
    let newValue  = this.state.initialvalue + 1;
    this.setState({ initialvalue: newValue });
  };
  render() {
    let { initialvalue } = this.state;
    return (
      <div id="wrapperDiv">
        <Counter initValue={initialvalue} incrCounter={this.incrementCounter}/>
      </div>
    );
  }
}
