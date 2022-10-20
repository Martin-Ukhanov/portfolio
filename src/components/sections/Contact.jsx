import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .contact-form {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing);
  }

  .contact-form .info {
    display: flex;
    gap: var(--spacing);
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: var(--spacing);
    color: inherit;
    background-color: inherit;
    border: var(--border-width) solid var(--color-1);
    border-radius: 0;
    outline: none;
    font-size: var(--fz-xs);
    font-family: inherit;
    resize: none;
  }

  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: var(--color-1);
    opacity: 0.7;
  }

  .contact-form button {
    padding: var(--spacing);
    border: var(--border-width) solid var(--color-1);
  }

  .contact-form button:hover,
  .contact-form button:active {
    color: var(--color-2);
    background-color: var(--color-1);
  }

  @media screen and (max-width: 550px) {
    .contact-form .info {
      flex-direction: column;
    }
  }
`;

function Contact() {
  const contactFormRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'contact_service',
      'contact_form',
      contactFormRef.current,
      process.env.REACT_APP_EMAILJS_SERVICE_ID
    );

    contactFormRef.current.reset();
  };

  return (
    <StyledContact id="contact">
      <div className="section-heading">Contact</div>
      <form
        className="contact-form"
        autoComplete="off"
        ref={contactFormRef}
        onSubmit={sendEmail}
      >
        <div className="info">
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
        </div>
        <textarea name="message" rows="12" placeholder="Message" required />
        <button type="submit">Submit</button>
      </form>
    </StyledContact>
  );
}

export default Contact;
