import React, { Component, Login, Form } from 'react';
import Terminal from 'terminal-in-react';

import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'React'
//     };
//   }


//   render() {
//     return (
//       <div>
//         <Hello name={this.state.name} />
//         <p>
//           Start editing to see some magic happen :)
//         </p>
//       </div>
//     );
//   }
// }
class App extends Component {
  showMsg = () => 'Hello World'

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw"
        }}
      >
        <Terminal
          watchConsoleLogging='true'
          color='#eee'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          fullscreen
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
        />
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));

