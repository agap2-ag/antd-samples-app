import React, { Component } from 'react';
import {
  Alert,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  TimePicker,
  Select,
} from 'antd';

class FormDatePickerAlert extends Component {

  state = {
    date: null,
  };

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`);
    this.setState({ date });
  };


  render() {
    const { date } = this.state;
    return (
      <div>
        <p>Adapted from&nbsp;
          <a href="https://ant.design/docs/react/getting-started" target="_blank" rel="noopener noreferrer"><code>antd</code> Getting Started docs</a>
        </p>
        <div className="datepicker__wrapper">
          <DatePicker onChange={this.handleChange} />
          <div className="datepicker__msg">
            <Alert
              message={`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`}
              type="success"
            />
          </div>
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
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };

    return (
      <Form {...formItemLayout}>
        <div className="row">
          <div className="col">
            <p>Adapted from&nbsp;
              <a href="https://ant.design/components/form/#components-form-demo-validate-static" target="_blank" rel="noopener noreferrer"><code>antd</code> Validation options docs</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
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

          </div>
          <div className="col">
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

          </div>
          <div className="col">
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
          </div>
        </div>
      </Form>
    );
  }
}

export {
  FormDatePickerAlert,
  FormPrimeVal,
  FormValSamples
}
