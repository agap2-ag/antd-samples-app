import React, { Component } from 'react';
import logo from './logo.svg';
import { 
  FormValSamples,
  FormDatePickerAlert,
  FormMonthPicker,
  FormWeekPicker,
  FormDateRangeAlert,
  FormPrimeVal,
  FormSelectSamples,
  FormDropdownSamples,
  FormBtnsSamples,
} from './Forms/FormSamples';
import './App.css';
import {
  Affix,
  Anchor,
  Col,
  Divider,
  Empty,
  Icon,
  LocaleProvider,
  Row
} from 'antd';
import pt_PT from 'antd/lib/locale-provider/pt_PT';
import 'antd/dist/antd.css';

class App extends Component {
  state = {
    headerOffset: 0,
    asideTopOffset: 52,
    bottomOffset: 0,
  }

  componentDidMount() {
    // Bootstrap
    // const btsrpLnk = document.createElement("link");
    // btsrpLnk.setAttribute('rel', 'stylesheet');
    // btsrpLnk.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    // btsrpLnk.setAttribute('integrity', 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T');
    // btsrpLnk.setAttribute('crossorigin', 'anonymous');
    // document.head.appendChild(btsrpLnk);
  }

  render() {
    const { Link } = Anchor;
    return (
      <LocaleProvider locale={pt_PT}>
      <div className="app">
        <Affix offsetTop={this.state.headerOffset}>
          <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <div className="fgrow">
              <h1>
                An&nbsp;
                <a className="link-green" title="React's antd" href="https://ant.design/docs/react/introduce" target="_blank" rel="noopener noreferrer">
                  Ant Design
                </a> example created through&nbsp;
                <a className="link-green" title="single-page app generator" href="https://github.com/facebookincubator/create-react-app"  target="_blank" rel="noopener noreferrer">
                  <code>create-react-app</code>
                </a>
              </h1>
            </div>
            <div>
            <a className="link-green flex-grow" title="Source code" href="https://github.com/agap2-ag/antd-samples-app"  target="_blank"  rel="noopener noreferrer">
              <Icon type="github" />
            </a>
            </div>
          </header>
        </Affix>
        <div className="nav-content">
          <aside>
            <Anchor offsetTop={this.state.asideTopOffset}>
              <Link href="#forms" title="Forms">
                <Link href="#val-samples" title="Validation samples" />
                <Link href="#pickers" title="Pickers" />
                <Link href="#options-lists" title="Options Lists (Dropdowns)" />
              </Link>
              <Link href="#nav&actions" title="Action Triggers">
                <Link href="#btns" title="Buttons" />
                <Link href="#links" title="Links" />
                <Link href="#breadcrumbs" title="Breadcrumbs" />
              </Link>
              <Link href="#info" title="General information" />
            </Anchor>
          </aside>
          <main className="container">
            <section id="forms">
              <h2>Forms</h2>
              <section>
                <div id="val-samples">
                  <h3>Validation Samples</h3>
                  <FormValSamples />
                </div>
                <hr />
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <div id="pickers">
                      <h3>Dates, Times, Alerts</h3>
                      <FormDatePickerAlert />
                      <h4>Months</h4>
                      <FormMonthPicker />
                      <h4>Weeks</h4>
                      <FormWeekPicker />
                      <h4>Ranges</h4>
                      <FormDateRangeAlert />
                    </div>
                  </Col>
                  <Col xs={24} sm={12}>
                    <h3>Validation with tips</h3>
                    <FormPrimeVal />
                    <h3 id="options-lists">Options Lists</h3>
                    <Divider orientation="right">
                      Dropdowns
                    </Divider>
                    <FormDropdownSamples />
                    <Divider orientation="right">
                      Selects
                    </Divider>
                    <FormSelectSamples />
                  </Col>
                </Row>
              </section>
            </section>
            <section id="nav&actions">
              <h2>Action triggers</h2>
              <section id="btns">
                <h3>Buttons</h3>
                <FormBtnsSamples />
              </section>
              <section id="links">
              </section>
            </section>
            <section id="info">
              <h2>General info</h2>
              <Empty image={logo} description={[
                <p>The purpose of this page is to showcase a
                 set of samples depicting different components from&nbsp;
                  <a title="React's antd" href="https://ant.design/docs/react/introduce" target="_blank" rel="noopener noreferrer">
                    Ant Design.
                  </a>
                </p>,
                <a className="link-green flex-grow" title="Source code" href="https://github.com/agap2-ag/antd-samples-app"  target="_blank"  rel="noopener noreferrer">
                  <Icon type="github" style={{fontSize: "24rem"}} rotate="-45" />
                </a>,
              ]} />
            </section>
          </main>
        </div>
        <Affix offsetBottom={this.state.bottomOffset}>
          <footer className="footer">
            <a
              className="link-green"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </footer>
        </Affix>
      </div>
      </LocaleProvider>
    );
  }
}

export default App;
