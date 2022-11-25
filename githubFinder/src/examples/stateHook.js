// class, stateless function component
// state -> class, lyfecycle (didMount, didUpdate)

// React -> 16.8: function component + hook => stateful function component

import React, { useState } from 'react'
import ReactDOM from 'react-dom';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <p>Butona {this.state.count} kez tıkladınız</p>
//                 <button onClick={() => this.setState({count: this.state.count + 1})}>BUTON</button>
//             </div>
//         )
//     }
// }


const App = (props) => {
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState(props.text);
    return(
        <div>
            <p>Butona {count} kez tıkladınız</p>
            <button onClick={() => setCount(count + 1)}> +1 </button>
            <button onClick={() => setCount(count - 1)}> -1 </button>
            <button onClick={() => setCount(props.count)}> reset </button>

            <p>girilen text: {text}</p>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}

App.defaultProps = {
    count: 5,
    text: 'deneme'
}

ReactDOM.render(<App count={7}/>, document.getElementById('root'));
