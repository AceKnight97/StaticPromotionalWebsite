import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
import emailjs, { init } from 'emailjs-com';
import { Form, Button, notification } from 'antd';
import apiKeys from '../../Constants/apiKeys';
import { useMergeState } from '../../Helpers/customHooks';
import MainHeader from '../Common/mainHeader';
import InputCT from '../../Components/Input/inputCT';

init(apiKeys.USER_ID);

const Greeting = (props) => {
  // const history = useHistory();
  const [state, setState] = useMergeState({
    name: '',
    email: '',
    message: '',
    loading: false,
  });
  const {
    name, message, loading, email,
  } = state;

  const onSubmit = () => {
    console.log({ name, message, email });
    // e.preventDefault();// Prevents default refresh by the browser
    // console.log({ target: e.target });
    // emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
    //   .then((result) => {
    //     console.log('Message Sent, I\'ll get back to you shortly', result.text);
    //   },
    //   (error) => {
    //     console.log('An error occured, Plese try again', error.text);
    //   });
  };

  const onChange = (key, value) => {
    setState({ [key]: value });
  };

  const { className } = props;

  const showInputForm = () => (
    <Form
      name='basic'
      className='contact-form'
      initialValues={{ remember: false }}
      onFinish={onSubmit}
      onFinishFailed={() => console.log('fail')}
    >
      <Form.Item className='mb0'>
        <InputCT
          name='name'
          title='Your name:'
          placeholder='Clark Kent'
          value={name}
          onChange={onChange}
        />
      </Form.Item>

      <Form.Item className='mb0-mt16'>
        <InputCT
          name='email'
          className='mt16'
          title='Your Email:'
          placeholder='ClarkKent@superman.com'
          value={email}
          onChange={onChange}
        />
      </Form.Item>

      <Form.Item className='mb0-mt16'>
        <InputCT
          name='message'
          title='Your Message:'
          type='TEXTAREA'
          onChange={onChange}
          value={message}
          placeholder='I want to ...'
        />
      </Form.Item>

      <Form.Item className='mb0-mt40'>
        <Button disabled={!message} loading={loading} type='primary' block htmlType='submit'>
          Send Email
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <>
      <div className='contact'>
        <MainHeader />

        <div className='contact-main'>
          {showInputForm()}
        </div>
      </div>
    </>
  );
};

Greeting.defaultProps = {
  className: '',
};
Greeting.propTypes = {
  className: PropTypes.string,
};

export default Greeting;
