'use client';

import { useRef, useState } from 'react';
import FormInput from '@/components/Forms/FormInput';
import FormTextarea from '@/components/Forms/FormTextarea';
import Spinner from '@/components/Spinner/Spinner';
import SuccessIcon from '@/components/SuccessIcon/SuccessIcon';

export default function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [status, setStatus] = useState('default');

  const messageDict = {
    Success: 'Your message was sent!',
    Error: 'There was an error sending your message. Please try again.',
    Sending: 'Sending...',
    default: '',
  } as const;

  type Messages = typeof messageDict;
  type MessageKeys = keyof Messages;

  const getMessage = (key: MessageKeys) => {
    return messageDict[key] || messageDict.default;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'Sending') return;
    setStatus('Sending');

    const formData = {
      name: nameRef.current?.value || '',
      email: emailRef.current?.value || '',
      company: companyRef.current?.value || '',
      message: messageRef.current?.value || '',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Success');
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';
      } else {
        setStatus('Error');
      }
    } catch (err) {
      setStatus('Error');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormInput
        name="name"
        placeholder="Your name"
        required
        label="Name"
        inputRef={nameRef}
      />
      <FormInput
        name="email"
        type="email"
        placeholder="name@email.com"
        required
        label="Email"
        inputRef={emailRef}
      />
      {/* Honeypot */}
      <FormInput
        name="company"
        autoComplete="off"
        style={{ display: 'none' }}
        tabIndex={-1}
        inputRef={companyRef}
      />
      <FormTextarea
        name="message"
        placeholder="Your message here..."
        required
        label="Message"
        rows={5}
        inputRef={messageRef}
      />
      <button
        className="button button--neumorphic"
        type="submit"
        disabled={status === 'Sending'}
      >
        {status === 'Sending' ? (
          <>
            <Spinner /> Sending
          </>
        ) : (
          'Send'
        )}
      </button>
      {['Success', 'Error'].includes(status) && (
        <div className="form__status-wrapper">
          <p>
            {status === 'Success' && <SuccessIcon />}
            <b
              className={
                status === 'Success' ? 'text--success' : 'text--danger'
              }
            >
              {' '}
              {status}:
            </b>{' '}
            {getMessage(status as MessageKeys)}
          </p>
        </div>
      )}
    </form>
  );
}
