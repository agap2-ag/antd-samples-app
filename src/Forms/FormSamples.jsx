import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pt';
import {
  Alert,
  Cascader,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  TimePicker,
} from 'antd';
import {KeyPickRange} from './KeyStrokeDetect';
import './Forms.css';

class FormDatePickerAlert extends Component {

  state = {
    date: null,
  };

  handleChange = date => {
    message.info(`-> ${date ? date.format("YYYY-MM-DD") : "None"}`);
    this.setState({ date });
  };

  render() {
    const { date } = this.state;
    moment.locale('pt');
    // https://ant.design/components/locale-provider/
    return (
      <div>
        <p>Adapted from&nbsp;
          <a href="https://ant.design/docs/react/getting-started" target="_blank" rel="noopener noreferrer"><code>antd</code> Getting Started docs</a>
        </p>
        <div className="inwrap">
          <DatePicker onChange={this.handleChange} />
          <div className="msg">
            <Alert
              message={`Data: ${date ? date.format('YYYY-MM-DD') : 'None'}`}
              type="success"
            />
          </div>
        </div>
      </div>
    );
  }
}

class FormMonthPicker extends Component {
  render() {
    const MonthPicker = DatePicker.MonthPicker;
    return (
      <div className="inwrap">
        <MonthPicker />
      </div>
    );
  }
}

class FormWeekPicker extends Component {
  render() {
    const WeekPicker = DatePicker.WeekPicker;
    return (
      <div className="inwrap">
        <WeekPicker />
      </div>
    );
  }
}

class FormDateRangeAlert extends Component {

  state = {
    dateFrom: null,
    dateTo: null,
  };

  handleChange = (dates, dateStrings) => {
    message.info(`From: ${
      dates[0] ? dateStrings[0] : "None"}, to: ${
      dates[1] ? dateStrings[1] : "None"}`);
    this.setState({ dateFrom: dates[0], dateTo: dates[1] });
  };

  render() {
    const RangePicker = DatePicker.RangePicker;

    document.addEventListener('keydown', KeyPickRange);
    return (
      <div>
        <p>Adapted from&nbsp;
          <a href="https://ant.design/components/date-picker" target="_blank" rel="noopener noreferrer"><code>antd</code> Date Picker docs</a>
        </p>
        <p>When opened date can be set with keys H-Hoje; O-Ontem; A-Amanhã<br/>
          (due to current locale: <code>&lt;html lang="pt"&gt;)</code>.<br/>
          English locale keys: D-toDay; Y–Yesterday; T-Tomorrow
        </p>
        <div className="inwrap">
          <RangePicker
            ranges={{
              Yesterday: [moment().subtract(1, 'days'), moment()],
              Today: [moment(), moment()],
              Tomorrow: [moment(), moment().add(1, 'days')],
              'Last month': [moment().startOf('month'), moment().endOf('month')]
            }}
            onChange={this.handleChange}
          />
        </div>
        <div className="inwrap">
          <RangePicker
            ranges={{
              Yesterday: [moment().subtract(1, 'days'), moment()],
              Today: [moment(), moment()],
              Tomorrow: [moment(), moment().add(1, 'days')],
              'Yesterday (since 0h)': [moment().subtract(1, 'days').startOf('day'), moment()],
              'Today (since 0h)': [moment().startOf('day'), moment()],
              'Last month': [moment().startOf('month'), moment().endOf('month')]
            }}
            showTime
            format="YYYY/MM/DD HH:mm:ss"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
class FormPrimeVal extends Component {
  state = {
    number: {
      value: 11,
    },
  };

  validatePrimeNumber = (number) => {
    if (number === 11) {
      return {
        validateStatus: 'success',
        errorMsg: null,
      };
    }
    return {
      validateStatus: 'error',
      errorMsg: 'The prime between 8 and 12 is 11!',
    };
  }

  handleNumberChange = (value) => {
    this.setState({
      number: {
        ...this.validatePrimeNumber(value),
        value,
      },
    });
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
    const number = this.state.number;
    const tips = 'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';
    return (
      <div>
        <p>Adapted from&nbsp;
          <a href="https://ant.design/components/form/#components-form-demo-without-form-create" target="_blank" rel="noopener noreferrer"><code>antd</code> Primes example docs</a>
        </p>
        <Form>
          <Form.Item
            {...formItemLayout}
            label="Prime between 8 & 12"
            validateStatus={number.validateStatus}
            help={number.errorMsg || tips}
          >
            <InputNumber
              min={8}
              max={12}
              value={number.value}
              onChange={this.handleNumberChange}
            />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

class FormValSamples extends Component {

  render() {
    const { Option } = Select;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 24 },
        lg: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 10 },
        sm: { span: 23 },
        md: { span: 23 },
        lg: { span: 12 },
      },
    };

    return (
      <Form {...formItemLayout}>
        <Row>
          <Col span={24}>
            <p>Adapted from&nbsp;
              <a href="https://ant.design/components/form/#components-form-demo-validate-static" target="_blank" rel="noopener noreferrer"><code>antd</code> Validation options docs</a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item
              label="Fail"
              validateStatus="error"
              help="Should be combination of numbers & alphabets"
            >
              <Input placeholder="unavailable choice" id="error" />
            </Form.Item>

            <Form.Item
              label="Warning"
              validateStatus="warning"
            >
              <Input placeholder="Warning" id="warning" />
            </Form.Item>

            <Form.Item
              label="Validating"
              hasFeedback
              validateStatus="validating"
              help="The information is being validated..."
            >
              <Input placeholder="Validating" id="validating" />
            </Form.Item>
            <Form.Item
              label="Success"
              hasFeedback
              validateStatus="success"
            >
              <Input placeholder="I'm the content" id="success" />
            </Form.Item>

          </Col>
          <Col span={8}>
            <Form.Item
              label="Warning"
              hasFeedback
              validateStatus="warning"
            >
              <Input placeholder="Warning" id="warning2" />
            </Form.Item>

            <Form.Item
              label="Fail"
              hasFeedback
              validateStatus="error"
              help="Should be combination of numbers & alphabets"
            >
              <Input placeholder="unavailable choice" id="error2" />
            </Form.Item>

            <Form.Item
              label="Success"
              hasFeedback
              validateStatus="success"
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              label="Warning"
              hasFeedback
              validateStatus="warning"
            >
              <TimePicker style={{ width: '100%' }} />
            </Form.Item>

          </Col>
          <Col span={8}>
            <Form.Item
              label="Error"
              hasFeedback
              validateStatus="error"
            >
              <Select defaultValue="1">
                <Option value="1">Option 1</Option>
                <Option value="2">Option 2</Option>
                <Option value="3">Option 3</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Validating"
              hasFeedback
              validateStatus="validating"
              help="The information is being validated..."
            >
              <Cascader defaultValue={['1']} options={[]} />
            </Form.Item>

            <Form.Item
              label="inline"
              style={{ marginBottom: 0 }}
            >
              <Form.Item
                validateStatus="error"
                help="Please select the correct date"
                style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
              >
                <DatePicker />
              </Form.Item>
              <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>
                -
              </span>
              <Form.Item
                style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
              >
                <DatePicker />
              </Form.Item>
            </Form.Item>

            <Form.Item
              label="Success"
              hasFeedback
              validateStatus="success"
            >
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export {
  FormDatePickerAlert,
  FormMonthPicker,
  FormWeekPicker,
  FormDateRangeAlert,
  FormPrimeVal,
  FormValSamples
}
