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

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus('Sending...');

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
        setStatus('Message sent!');
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';
      } else {
        setStatus('Something went wrong.');
      }
    } catch (err) {
      setStatus('Something went wrong.');
    } finally {
      setIsSubmitting(false);
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
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Spinner /> Sending
          </>
        ) : status === 'Message sent!' ? (
          <>
            Sent <SuccessIcon />
          </>
        ) : (
          'Send'
        )}
      </button>

      {status && status !== 'Message sent!' && <p>{status}</p>}
    </form>
  );
}
