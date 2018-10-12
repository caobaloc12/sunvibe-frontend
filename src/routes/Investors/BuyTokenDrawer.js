import React, { Component } from 'react';
import { Form, Button, Drawer, Input, Slider } from 'antd';
import { numberWithCommas } from '../../utils/numbers';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 4,
    },
  },
};

class BuyTokenDrawer extends Component {
  state = {
    visible: false,
    amount: 0,
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((error, values) => {
      if (!error) {
        console.log(values);
      }
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div>
        <Button
          type="primary"
          size="large"
          style={{ margin: '16px 0' }}
          icon="shopping-cart"
          onClick={this.showDrawer}
        >
            Buy token
          </Button>
        <Drawer
          title="Buy Token"
          placement="right"
          width="40vw"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              label="Foo"
              {...formItemLayout}
            >
              {getFieldDecorator('foo', {
                rules: [
                  {
                    required: true,
                    message: 'Please input',
                  },
                ],
              })(<Input placeholder="Please input" />)}
            </FormItem>
            <FormItem
              label="Bar"
              {...formItemLayout}
            >
              {getFieldDecorator('bar')(<Slider min={0} max={100} onAfterChange={val => this.setState({ amount: val })} />)}
            </FormItem>
            <FormItem
              label="Value"
              {...formItemLayout}
            >
              {
                `${numberWithCommas(this.state.amount * 123)} VND`
              }
            </FormItem>
            <FormItem
              {...tailFormItemLayout}
            >
              <Button
                htmlType="submit"
                type="primary"
                style={{ marginRight: 8 }}
              >
                Buy
              </Button>
              <Button onClick={this.onClose}>
                Cancel
              </Button>
            </FormItem>
          </Form>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(BuyTokenDrawer);
