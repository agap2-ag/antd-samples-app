import React, { Component } from 'react';
import ReactJson from 'react-json-view'
import moment from 'moment';
import 'moment/locale/pt';
import {
  Alert,
  Button,
  Cascader,
  Col,
  DatePicker,
  Divider,
  Empty,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Row,
  Select,
  TimePicker,
  Menu, Dropdown, Icon
} from 'antd';
import {KeyPickRange} from './KeyStrokeDetect';
import './Forms.css';

// sub-components
const Option = Select.Option;
const {SubMenu, Item} = Menu;
const ButtonGroup = Button.Group;

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
const defaultOpts = OPTIONS.map(item => (
    <Option key={item} value={item}>
      {item}
    </Option>
  )
);
const defaultMenuIts = OPTIONS.map(item => (
    <Item key={item}><Icon type="smile" spin />{item}</Item>
  )
);

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
              label="Success"
              hasFeedback
              validateStatus="success"
            >
              <Input placeholder="I'm the content" id="success" />
            </Form.Item>
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

          </Col>
          <Col span={8}>
            <Form.Item
              label="Success"
              hasFeedback
              validateStatus="success"
            >
              <InputNumber style={{ width: '100%' }} />
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
              label="Warning"
              hasFeedback
              validateStatus="warning"
            >
              <Input placeholder="Warning" id="warning2" />
            </Form.Item>
            <Form.Item
              label="Validating"
              hasFeedback
              validateStatus="validating"
              help="The information is being validated..."
            >
              <Cascader defaultValue={['1']} options={[]} />
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

            <Divider orientation="right">
              Pickers
            </Divider>

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
        </Row>
      </Form>
    );
  }
}

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
              type="info"
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
    return (number === 11) ? {
      validateStatus: 'success',
      errorMsg: null,
    } : {
      validateStatus: 'error',
      errorMsg: '11 is the only valid prime!',
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
      labelCol: { span: 12 },
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

class FormDropdownSamples extends Component {
  state = {
    loading: false,
    visible: false,
    chosen: ''
  }

  funs = {
    openModal: (v) => {
      this.setState({visible:true, chosen: v.key})
    },
    closeModal: () => {
      this.setState({visible:false})
    },
    delayAct: () => {
      this.setState({loading:true});
      setTimeout(() => {
        this.setState({ loading: false, visible: false });
      }, 3000);
    }
  }

  render() {
    const { visible, loading, chosen } = this.state;
    const menu = (
      <Menu onClick={this.funs.openModal}>
        {defaultMenuIts}
        <SubMenu title="sub menu">
          <Item key="1"><Icon type="user" />mitem 1</Item>
          <Item key="2">mitem 2</Item>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled>
          <Item key="3">mitem</Item>
          <Item key="4">mitem</Item>
        </SubMenu>
      </Menu>
    );
    return (
      <Row gutter={12}>
        <p>Clicking the options trigger a <b>Modal</b> and don't change the clicked element</p>
        <Col span={12}>
          <h4>Simple</h4>
          <Dropdown overlay={menu}>
            <Button>
              Cascading menu <Icon type="down" />
            </Button>
          </Dropdown>
        </Col>
        <Col span={12}>
          <h4>Triggered by right-click</h4>
          <Dropdown overlay={menu} trigger={['contextMenu']}>
            <Button>
              Cascading menu <Icon type="down" />
            </Button>
          </Dropdown>
        </Col>
        <Modal
          visible={visible}
          title={[
            <h2><Icon type="info-circle" /> You chose {chosen}!</h2>
          ]}
          onOk={this.funs.delayAct}
          okType="warning"
          onCancel={this.funs.closeModal}
          footer={[
            <Button key="back" type="danger" onClick={this.funs.closeModal}>Choose again</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.funs.delayAct}>
              Yes
            </Button>,
          ]}
          width="80%"
          bodyStyle={{height: "80vh", overflow: "auto"}}
          centered
        >
          
          <Empty description={[
            <Icon type="warning" style={{fontSize: "34rem"}} />,
            <h3>Your choice is about to be recorded!</h3>,
            <p>Nothing more to show for the moment.</p>,
            <h4>Are you sure {chosen} is your choice?</h4>,
          ]} />
        </Modal>
      </Row>
    );
  }
}

class FormSelectSamples extends Component {
  state = {
    selectedItems: [],
  };

  funs = {
    selectedInfo: value => {
      message.info(`selected ${value}`);
    },
    multiChangeItems: selectedItems => {
      this.funs.selectedInfo(selectedItems[selectedItems.length-1])
      this.setState({ selectedItems });
    },
    filterSelDrop: (input, option) => {
      const opts = option.props.children;
      return opts.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    add2Dropdown: menu => (
      <div>
        {menu}
        <Divider style={{ margin: '4px 0' }} />
        <div style={{ padding: '8px', cursor: 'pointer' }}>
          <Icon type="plus" /> Add item
        </div>
      </div>
    )
  }

  render() {
    const { selectedItems } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    return (
      <Row gutter={12}>
        <p>Clicking the options alter a value of an input</p>
        <Col span={12}>
          <h4>Multi</h4>
          <Select
            mode="multiple"
            placeholder="Please select"
            defaultValue={OPTIONS[2]}
            onChange={this.funs.multiChangeItems}
            tokenSeparators={[',']}
            allowClear
          >
            {defaultOpts}
          </Select>
          <h4>Multi removing options</h4>
          <Select
            mode="multiple"
            placeholder="Hides already selected"
            value={selectedItems}
            onChange={this.funs.multiChangeItems}
          >
            {filteredOptions.map(item => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={12}>
          <h4>Single-dropdown-like</h4>
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={this.funs.selectedInfo}
            filterOption={this.funs.filterSelDrop}
            dropdownRender={this.funs.add2Dropdown}
            notFoundContent="Not in the list!"
          >
            {defaultOpts}
          </Select>
        </Col>
      </Row>
    );
  }
}

class FormBtnsSamples extends Component {
 state = {
    loading: false,
    iconLoading: false,
  }

  funs = {
    enterLoading: () => {
      this.setState({ loading: true });
    },
    enterIconLoading: () => {
      this.setState({ iconLoading: true });
    },
    selectedInfo: value => {
      message.info(`selected ${value}`);
    },
    filterSelDrop: (input, option) => {
      const opts = option.props.children;
      return opts.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
  }

  render() {
    return (
      <Row gutter={12}>
        <Col xs={12} sm={8}>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Divider orientation="right">
            Ghost
          </Divider>
          <div style={{ background: 'rgb(200, 200, 200)', padding: '26px 16px 16px' }}>
            <Button type="primary" ghost>Primary</Button>
            <Button ghost>Default</Button>
            <Button type="dashed" ghost>Dashed</Button>
            <Button type="danger" ghost>danger</Button>
          </div>
          <Divider orientation="right">
            Block
          </Divider>
          <Button type="primary" block>Primary</Button>
          <Button block>Default</Button>
          <Button type="dashed" block>Dashed</Button>
          <Button type="danger" block>danger</Button>
        </Col>
        <Col xs={12} sm={8}>
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" icon="search">Search</Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <br />
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button type="dashed" shape="circle" icon="search" />
          <Button type="dashed" icon="search">Search</Button>
          <Divider orientation="right">
            With Dropdown
          </Divider>
          <ButtonGroup>
            <Select
              showSearch
              showArrow={false}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={this.funs.selectedInfo}
              filterOption={this.funs.filterSelDrop}
              notFoundContent="Search parameter does not match with our records"
            >
              {defaultOpts}
            </Select>
            <Button type="primary" icon="search" />
          </ButtonGroup>
        </Col>
        <Col xs={12} sm={8}>
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <br />
          <Button type="primary" loading={this.state.loading} onClick={this.funs.enterLoading}>
            Click me!
          </Button>
          <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.funs.enterIconLoading}>
            Click me!
          </Button>
          <br />
          <Button shape="circle" loading />
          <Button type="primary" shape="circle" loading />
        </Col>
      </Row>
    );
  }
}

class FormLinksSamples extends Component {

}

export {
  FormValSamples,
  FormDatePickerAlert,
  FormMonthPicker,
  FormWeekPicker,
  FormDateRangeAlert,
  FormPrimeVal,
  FormSelectSamples,
  FormDropdownSamples,
  FormBtnsSamples,
  FormLinksSamples,
}
