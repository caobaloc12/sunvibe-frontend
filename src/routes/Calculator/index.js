import React, { Component } from 'react';
import { Form, Input, Select, Button, Slider } from 'antd';
import MainLayout from '../../components/MainLayout/MainLayout';
import { numberWithCommas } from '../../utils/numbers';

const FormItem = Form.Item;
const Option = Select.Option;
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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 12,
      offset: 5,
    },
  },
};

class Calculator extends Component {
  state = {
    confirmDirty: false,
    result: 0,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  handleAfterChange = (value) => {
    const result = value * 1234;
    this.setState({ result });
  }

  render() {
    const { form, location } = this.props;
    const { getFieldDecorator } = form;

    return (
      <MainLayout location={location}>
        <div style={{ padding: 24 }}>
          <Form onSubmit={this.handleSubmit} style={{ paddingTop: 24 }}>
            <FormItem
              {...formItemLayout}
              label="Email"
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'Email is invalid!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Phone Number"
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input style={{ width: '100%' }} />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Amount"
            >
              {getFieldDecorator('amount')(
                <Slider onAfterChange={this.handleAfterChange} />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Result"
            >
              {`${numberWithCommas(this.state.result)} VND`}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Address"
            >
              {getFieldDecorator('address')(
                <Select placeholder="Select your address" style={{ width: '100%' }}>
                  <Option value="hanoi">Ha Noi</Option>
                  <Option value="haiphong">Hai Phong</Option>
                  <Option value="danang">Da Nang</Option>
                  <Option value="hcm">HCM</Option>
                </Select>,
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">Register</Button>
            </FormItem>

          </Form>
        </div>
      </MainLayout>
    );
  }
}

export default Form.create()(Calculator);
