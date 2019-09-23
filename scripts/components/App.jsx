import React, {Component} from 'react';

import Counter from './Counter.jsx';
import Some from './Some.jsx';
import CssFile from "./style.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: 'hello world',
            msg1: 'hello world functional',
        }
    }

    render() {
        const { msg, msg1 } = this.state;

        return (
            <div className={CssFile.root}>
                <h1>functional component</h1>
                <Counter msg={msg}/>
                <Some msg={msg1}>
                    <h4 style={{ color: 'red' }}>test1</h4>
                </Some>
            </div>
        );
    }
}

// const App = () => {
//   return (
//       <>
//         <h1>functional component</h1>
//         <Counter/>
//     </>
//   )
// };

export default App;
