'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Phone Number is required'),
    sendMessage: Yup.string().required('Please leave us a message.'),
    email: Yup.string()
      .required('Email is required')
      .email('Entered value does not match email format'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  async function onSubmit(data, e) {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error('Failed to send message');
        return;
      }

      console.log('Message submitted successfully');
      e.target.reset();
    } catch (error) {
      console.error('Error submitting message:', error);
    }
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="messages"></div>
      <div className="row controls">
        <div className="col-md-6">
          <div className="input-group-meta form-group mb-60">
            <label>Name or Business</label>
            <input
              type="text"
              placeholder="Name or Business"
              name="firstName"
              {...register('firstName')}
              className={`${errors.firstName ? 'is-invalid' : ''}`}
            />
            {errors.firstName && (
              <div className="invalid-feedback">
                {errors.firstName?.message}
              </div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-group-meta form-group mb-60">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              name="lastName"
              {...register('lastName')}
              className={`${errors.lastName ? 'is-invalid' : ''}`}
            />
            {errors.lastName && (
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            )}
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-60">
            <label>Email Address</label>
            <input
              placeholder="Enter Your Email"
              name="email"
              type="text"
              {...register('email')}
              className={` ${errors.email ? 'is-invalid' : ''}`}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email?.message}</div>
            )}
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group lg mb-40">
            <label>Message</label>
            <textarea
              placeholder="Your message goes here.."
              name="sendMessage"
              {...register('sendMessage')}
              className={`${errors.sendMessage ? 'is-invalid' : ''}`}
            ></textarea>
            {errors.sendMessage && (
              <div className="invalid-feedback">
                {errors.sendMessage?.message}
              </div>
            )}
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="theme-btn-two">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

