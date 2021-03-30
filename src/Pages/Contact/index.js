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
  const history = useHistory();
  const [state, setState] = useMergeState({
    email: '',
    message: '',
    loading: false,
  });
  const {
    email, message, errorStatus, loading,
  } = state;

  const onSubmit = (e) => {
    e.preventDefault();// Prevents default refresh by the browser
    console.log({ target: e.target });
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
      className='mt40'
      initialValues={{ remember: false }}
      onFinish={onSubmit}
      onFinishFailed={() => console.log('fail')}
    >
      <Form.Item className='mb0' validateStatus={errorStatus}>
        <InputCT
          name='email'
          title='Email'
          placeholder='johnsmith@example.com'
          value={email}
          onChange={onChange}
        />
      </Form.Item>

      <Form.Item className='mb0-mt16' validateStatus={errorStatus}>
        <InputCT
          name='biofluxDiagnosisInfo'
          className='mt16'
          title='Diagnosis info'
          type='TEXTAREA'
          onChange={onChange}
          value={message}
          placeholder='Diagnosis info...'
        />
      </Form.Item>

      <Form.Item className='mb0-mt40'>
        <Button disabled={!message} loading={loading} type='primary' block htmlType='submit'>
          Sign in
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
