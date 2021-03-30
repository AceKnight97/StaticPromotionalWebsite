import React from 'react';
import _ from 'lodash';
import emailjs, { init } from 'emailjs-com';
import apiKeys from '../../../Constants/apiKeys';

init(apiKeys.USER_ID);

const DetailsInfo = () => {
  const onSubmit = (e) => {
    e.preventDefault();// Prevents default refresh by the browser
    emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
      .then((result) => {
        console.log('Message Sent, I\'ll get back to you shortly', result.text);
      },
      (error) => {
        console.log('An error occured, Plese try again', error.text);
      });
  };

  return (
    <div className='details-info'>
      <form className='form' onSubmit={onSubmit}>
        <p>Your Name:</p>
        <input name='from_name' type='text' placeholder='name…' className='form__input' />
        <p>Subject:</p>
        <input name='subject' type='text' placeholder='Subject…' className='form__input' />
        <p>Your Message:</p>
        <textarea name='message' type='text' placeholder='Your Message…' className='form__input-message' />
        <button className='form__input — button'>Send Message</button>
      </form>
    </div>
  );
};

DetailsInfo.defaultProps = {
};
DetailsInfo.propTypes = {
};

export default DetailsInfo;
