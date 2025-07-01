'use client';

import { ContactFormData, apiService } from '@/services/api';
import {
  isValidEmail,
  isValidFullName,
  isValidPhone,
  sanitizeInput,
} from '@/utils';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormProps {
  className?: string;
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactSection({ className }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>('idle');
  const [responseMessage, setResponseMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm<ContactFormData>({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      budget: undefined,
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState('submitting');
    setResponseMessage('');

    try {
      // Sanitize inputs
      const sanitizedData = {
        fullName: sanitizeInput(data.fullName),
        email: sanitizeInput(data.email),
        phone: data.phone ? sanitizeInput(data.phone) : '',
        subject: sanitizeInput(data.subject),
        budget: data.budget,
        message: sanitizeInput(data.message),
      };

      const response = await apiService.submitContactForm(sanitizedData);
      setFormState('success');
      setResponseMessage(response.message);
      reset(); // Clear form on success
    } catch (error: any) {
      setFormState('error');
      setResponseMessage(
        error.message || 'Something went wrong. Please try again.'
      );
    }
  };

  const resetForm = () => {
    setFormState('idle');
    setResponseMessage('');
    reset();
  };

  return (
    <section
      id="contact"
      className={clsx(
        'relative text-white overflow-hidden max-w-[1060px] mx-auto border-x border-dark-15',
        className
      )}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Contact Form */}
        {formState === 'success' ? (
          // Success State
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircleIcon className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-neutral-20 mb-6">{responseMessage}</p>
            <button
              onClick={resetForm}
              className="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-400 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          // Form
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name *
                </label>
                <input
                  {...register('fullName', {
                    required: 'Full name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters',
                    },
                    validate: (value) =>
                      isValidFullName(value) ||
                      'Please enter a valid full name',
                  })}
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className={clsx(
                    'w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-neutral-30 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200',
                    errors.fullName
                      ? 'border-red-400 focus:ring-red-400/50'
                      : 'border-white/20 focus:ring-accent-400/50'
                  )}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address *
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    validate: (value) =>
                      isValidEmail(value) ||
                      'Please enter a valid email address',
                  })}
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className={clsx(
                    'w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-neutral-30 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200',
                    errors.email
                      ? 'border-red-400 focus:ring-red-400/50'
                      : 'border-white/20 focus:ring-accent-400/50'
                  )}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  {...register('phone', {
                    validate: (value) =>
                      !value ||
                      isValidPhone(value) ||
                      'Please enter a valid phone number',
                  })}
                  type="tel"
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  className={clsx(
                    'w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-neutral-30 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200',
                    errors.phone
                      ? 'border-red-400 focus:ring-red-400/50'
                      : 'border-white/20 focus:ring-accent-400/50'
                  )}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject *
                </label>
                <select
                  {...register('subject', {
                    required: 'Please select a subject',
                  })}
                  id="subject"
                  className={clsx(
                    'w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200',
                    errors.subject
                      ? 'border-red-400 focus:ring-red-400/50'
                      : 'border-white/20 focus:ring-accent-400/50'
                  )}
                >
                  <option value="" className="bg-neutral-900 text-neutral-20">
                    Select a subject
                  </option>
                  <option value="Web Development" className="bg-neutral-900">
                    Web Development
                  </option>
                  <option
                    value="Mobile App Development"
                    className="bg-neutral-900"
                  >
                    Mobile App Development
                  </option>
                  <option value="UI/UX Design" className="bg-neutral-900">
                    UI/UX Design
                  </option>
                  <option value="Digital Marketing" className="bg-neutral-900">
                    Digital Marketing
                  </option>
                  <option value="Branding" className="bg-neutral-900">
                    Branding
                  </option>
                  <option value="Consultation" className="bg-neutral-900">
                    General Consultation
                  </option>
                  <option value="Other" className="bg-neutral-900">
                    Other
                  </option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Budget */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium mb-2"
                >
                  Project Budget (USD)
                </label>
                <select
                  {...register('budget', {
                    valueAsNumber: true,
                  })}
                  id="budget"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:border-transparent transition-all duration-200"
                >
                  <option value="" className="bg-neutral-900 text-neutral-20">
                    Select budget range
                  </option>
                  <option value={5000} className="bg-neutral-900">
                    $5,000 - $10,000
                  </option>
                  <option value={15000} className="bg-neutral-900">
                    $10,000 - $25,000
                  </option>
                  <option value={35000} className="bg-neutral-900">
                    $25,000 - $50,000
                  </option>
                  <option value={75000} className="bg-neutral-900">
                    $50,000 - $100,000
                  </option>
                  <option value={150000} className="bg-neutral-900">
                    $100,000+
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters',
                    },
                  })}
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project, goals, timeline, or any specific requirements you have in mind..."
                  className={clsx(
                    'w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-neutral-30 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-none',
                    errors.message
                      ? 'border-red-400 focus:ring-red-400/50'
                      : 'border-white/20 focus:ring-accent-400/50'
                  )}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            {/* Error Message */}
            {formState === 'error' && responseMessage && (
              <div className="flex items-center space-x-3 p-4 bg-red-500/20 border border-red-400/50 rounded-lg">
                <ExclamationCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-400">{responseMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formState === 'submitting' || !isValid}
              className={clsx(
                'w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform',
                formState === 'submitting' || !isValid
                  ? 'bg-neutral-600 text-neutral-30 cursor-not-allowed'
                  : 'bg-gradient-to-r from-accent-500 to-accent-400 hover:from-accent-400 hover:to-accent-300 text-white hover:scale-105 shadow-lg hover:shadow-accent-500/25'
              )}
            >
              {formState === 'submitting' ? (
                <>
                  <div className="w-5 h-5 border-2 border-neutral-30 border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
