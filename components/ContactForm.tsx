import React, { useState } from 'react';
import { useTranslation } from '../services/i18n';

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

const ContactForm = () => {
    const { translations } = useTranslation();
    const contactForm = translations.contactForm;

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const subject = `${contactForm.emailSubjectPrefix} ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`;
        const body = `
${contactForm.emailLabels.name}: ${formData.name}
${contactForm.emailLabels.email}: ${formData.email}
${contactForm.emailLabels.phone}: ${formData.phone}
${contactForm.emailLabels.company}: ${formData.company}

${contactForm.emailLabels.message}:
${formData.message}
        `.trim();

        const mailtoLink = `mailto:trivelopers@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        try {
            window.location.href = mailtoLink;
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-12 rounded-3xl border border-slate-200/60 bg-white/90 px-4 py-12 shadow-[0_35px_70px_rgba(15,23,42,0.2)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-950/80 dark:shadow-[0_35px_75px_rgba(2,6,23,0.6)] dark:backdrop-blur-3xl transition">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                    {contactForm.title}
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                    {contactForm.description}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                            {contactForm.fields.name.label}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                            placeholder={contactForm.fields.name.placeholder}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                            {contactForm.fields.email.label}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                            placeholder={contactForm.fields.email.placeholder}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                            {contactForm.fields.phone.label}
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                            placeholder={contactForm.fields.phone.placeholder}
                        />
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                            {contactForm.fields.company.label}
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                            placeholder={contactForm.fields.company.placeholder}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        {contactForm.fields.message.label}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                        placeholder={contactForm.fields.message.placeholder}
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 px-8 py-3 text-base font-semibold text-white shadow-xl shadow-slate-900/30 transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 disabled:opacity-50"
                    >
                        {isSubmitting ? contactForm.submit.loading : contactForm.submit.idle}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
