'use client';

import { Checkbox, LoadingSpinner, RangeSlider } from '@/components/ui';
import { useContactForm } from '@/hooks/useApi';
import { ContactFormData, apiService } from '@/services/api';
import { isValidEmail, sanitizeInput } from '@/utils';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ContactForm } from '../../types';

interface ContactFormProps {
  className?: string;
  contactForm?: ContactForm | undefined;
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

// Extended form data to include the budget range and contact reason
interface ExtendedContactFormData extends ContactFormData {
  contactReasons: string[];
  budgetRange: number;
}

export function ContactSection({ className, contactForm }: ContactFormProps) {
  const { loading: formLoading } = useContactForm();
  const [formState, setFormState] = useState<FormState>('idle');
  const [responseMessage, setResponseMessage] = useState<string>('');

  // Fallback data when API is not available
  const fallbackData = {
    id: 1,
    fullNamePlaceholder: 'Full Name',
    emailPlaceholder: 'Email Address',
    questionLabel: 'Why are you contacting us?',
    budgetLabel: 'Your Budget',
    budgetMin: 1000,
    budgetMax: 100000,
    budgetMinLabel: '$1,000',
    budgetMaxLabel: '$100,000',
    messagePlaceholder: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            text: 'Tell us about your project, goals, and requirements...',
          },
        ],
      },
    ],
    submitButtonText: 'Send Message',
    contactOptions: [
      { id: 1, label: 'Web Development', value: 'web-development' },
      { id: 2, label: 'Mobile App', value: 'mobile-app' },
      { id: 3, label: 'UI/UX Design', value: 'ui-ux-design' },
      { id: 4, label: 'Digital Marketing', value: 'digital-marketing' },
      { id: 5, label: 'Branding', value: 'branding' },
      { id: 6, label: 'Consultation', value: 'consultation' },
    ],
  };

  const effectiveFormData = contactForm || fallbackData;

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
    watch,
  } = useForm<ExtendedContactFormData>({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactReasons: [],
      budgetRange: effectiveFormData?.budgetMin || 1000,
    },
  });

  // Helper function to extract text from rich text
  const extractTextFromRichText = (richText: any[]): string => {
    if (!richText || !Array.isArray(richText)) return '';
    return richText
      .map(
        (block) =>
          block.children?.map((child: any) => child.text).join(' ') || ''
      )
      .join(' ');
  };

  const messagePlaceholder = effectiveFormData
    ? extractTextFromRichText(effectiveFormData.messagePlaceholder)
    : 'Tell us about your project...';

  const formatCurrency = (value: number): string => {
    if (effectiveFormData?.budgetMinLabel.includes('THB')) {
      return `${value.toLocaleString()} THB`;
    }
    return `$${value.toLocaleString()}`;
  };

  const onSubmit = async (data: ExtendedContactFormData) => {
    setFormState('submitting');
    setResponseMessage('');

    try {
      // Sanitize inputs and prepare data
      const sanitizedData: ContactFormData = {
        fullName: sanitizeInput(data.fullName),
        email: sanitizeInput(data.email),
        phone: data.phone ? sanitizeInput(data.phone) : '',
        subject:
          data.contactReasons.length > 0
            ? data.contactReasons.join(', ')
            : sanitizeInput(data.subject),
        budget: data.budgetRange,
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

  if (formLoading) {
    return (
      <section
        id="contact"
        className={clsx(
          'relative text-white overflow-hidden min-h-[400px] flex items-center justify-center',
          className
        )}
      >
        <LoadingSpinner size="lg" />
      </section>
    );
  }

  return (
    <section
      id="contact"
      className={clsx('relative text-white overflow-hidden', className)}
    >
      <div className="relative z-10 max-w-7xl mx-auto p-10 sm:p-20 lg:p-80px border-x border-dark-15">
        {formState === 'success' ? (
          // Success State
          <div className="text-center py-8 w-full">
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
            {/* Email and Phone Row */}
            <div className="grid md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="flex p-6 lg:p-[24px_40px] flex-col justify-center items-start gap-5 flex-1 rounded-lg border border-dark-15 bg-[#24242480]">
                <label
                  htmlFor="fullName"
                  className="block text-[22px] font-semibold"
                >
                  {effectiveFormData?.fullNamePlaceholder || 'Full Name'} *
                </label>
                <input
                  {...register('fullName', {
                    required: 'Full name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters',
                    },
                  })}
                  type="text"
                  id="fullName"
                  placeholder={
                    effectiveFormData?.fullNamePlaceholder ||
                    'Enter your full name'
                  }
                  className={clsx(
                    'w-full px-4 py-3 bg-dark-50 border-b border-neutral-50 text-dark-90 placeholder-dark-40 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200',
                    errors.fullName
                      ? 'border-red-400 focus:ring-red-400/50'
                      : 'border-neutral-50 focus:ring-accent-400/50'
                  )}
                />
                {errors.fullName && (
                  <p className="text-sm text-red-400">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex p-6 lg:p-10 flex-col justify-center items-start gap-5 flex-1 rounded-lg border border-dark-15 bg-[#24242480]">
                <label
                  htmlFor="email"
                  className="block text-[22px] font-semibold"
                >
                  {effectiveFormData?.emailPlaceholder || 'Email Address'} *
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
                  placeholder={
                    effectiveFormData?.emailPlaceholder ||
                    'your.email@example.com'
                  }
                  className={clsx(
                    'w-full px-4 py-3 bg-dark-50 border-b border-neutral-50 text-dark-90 placeholder-dark-40 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200',
                    errors.email
                      ? 'border-red-400 focus:ring-red-400/50'
                      : 'border-neutral-50 focus:ring-accent-400/50'
                  )}
                />
                {errors.email && (
                  <p className="text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Contact Reasons (Checkboxes) */}
            {effectiveFormData?.contactOptions &&
              effectiveFormData.contactOptions.length > 0 && (
                <div className="flex p-6 lg:p-10 flex-col justify-center items-start gap-5 flex-1 rounded-lg border border-dark-15 bg-[#24242480]">
                  <label className="block text-[22px] font-semibold">
                    {effectiveFormData.questionLabel ||
                      'Why are you contacting us?'}
                  </label>
                  <Controller
                    name="contactReasons"
                    control={control}
                    render={({ field }) => (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                        {effectiveFormData.contactOptions?.map((option) => (
                          <div
                            key={option.id}
                            className="flex items-center space-x-3"
                          >
                            <Checkbox
                              id={`contact-${option.id}`}
                              checked={field.value.includes(option.value)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([
                                    ...field.value,
                                    option.value,
                                  ]);
                                } else {
                                  field.onChange(
                                    field.value.filter(
                                      (v) => v !== option.value
                                    )
                                  );
                                }
                              }}
                            />
                            <label
                              htmlFor={`contact-${option.id}`}
                              className="text-sm font-medium leading-none cursor-pointer"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  />
                </div>
              )}

            {/* Budget Range Slider */}
            {effectiveFormData && (
              <div className="flex p-6 lg:p-10 flex-col justify-center items-start gap-5 flex-1 rounded-lg border border-dark-15 bg-[#24242480]">
                <label className="block text-[22px] font-semibold">
                  {effectiveFormData.budgetLabel || 'Your Budget'}
                </label>
                <Controller
                  name="budgetRange"
                  control={control}
                  render={({ field }) => (
                    <RangeSlider
                      min={effectiveFormData.budgetMin}
                      max={effectiveFormData.budgetMax}
                      value={field.value}
                      onChange={field.onChange}
                      formatLabel={formatCurrency}
                      className="w-full"
                      // Step every 100
                      step={100}
                    />
                  )}
                />
              </div>
            )}

            {/* Message */}
            <div className="flex p-6 lg:p-10 flex-col justify-center items-start gap-5 flex-1 rounded-lg border border-dark-15 bg-[#24242480]">
              <label
                htmlFor="message"
                className="block text-[22px] font-semibold"
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
                placeholder={messagePlaceholder}
                className={clsx(
                  'w-full px-4 py-3 bg-dark-50 border-b border-neutral-50 text-dark-90 placeholder-dark-40 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-none',
                  errors.message
                    ? 'border-red-400 focus:ring-red-400/50'
                    : 'border-neutral-50 focus:ring-accent-400/50'
                )}
              />
              {errors.message && (
                <p className="text-sm text-red-400">{errors.message.message}</p>
              )}
            </div>

            {/* Error Message */}
            {formState === 'error' && responseMessage && (
              <div className="flex items-center space-x-3 p-4 bg-red-500/20 border-red-400/50 rounded-lg">
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
                  <span>
                    {effectiveFormData?.submitButtonText || 'Send Message'}
                  </span>
                </>
              )}
            </button>

            <p className="text-xs text-neutral-30 text-center">
              By submitting this form, you agree to our privacy policy and terms
              of service.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
