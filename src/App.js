import React, { Component } from 'react';
import logo from './logo.svg';
import { FormDatePickerAlert, FormPrimeVal , FormValSamples } from './Forms/FormSamples';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {

  componentDidMount() {
    const btsrpLnk = document.createElement("link");
    btsrpLnk.setAttribute('rel', 'stylesheet');
    btsrpLnk.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    btsrpLnk.setAttribute('integrity', 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T');
    btsrpLnk.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(btsrpLnk);
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <span>
            An&nbsp;
            <a className="link" title="React's antd" href="https://ant.design/docs/react/introduce" target="_blank" rel="noopener noreferrer">
              Ant Design
            </a> example created through&nbsp;
            <a className="link" title="single-page app generator" href="https://github.com/facebookincubator/create-react-app"  target="_blank" rel="noopener noreferrer">
              <code>create-react-app</code>
            </a>
          </span>
        </header>
        <main className="container">
          <h2>Forms</h2>
          <section className="form">
            <h3>Validation Samples</h3>
            <FormValSamples />
            <hr />
            <div className="row">
              <div className="col">
                <h3>DatePicker Alert</h3>
                <FormDatePickerAlert />
              </div>
              <div className="col">
                <h3>Prime Validation</h3>
                <FormPrimeVal />
              </div>
            </div>
          </section>
        </main>
        <footer>
          <a
            className="link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
