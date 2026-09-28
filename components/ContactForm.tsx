import React, { useState } from 'react';
import { useTranslation } from '../services/i18n';

interface FormData {
    name: string;
    email: string;
    country: string;
    phone: string;
    company: string;
    message: string;
    website: string;
}

const countries = [
    { code: 'AR', dial: '+54', es: 'Argentina', en: 'Argentina', flag: '🇦🇷' },
    { code: 'UY', dial: '+598', es: 'Uruguay', en: 'Uruguay', flag: '🇺🇾' },
    { code: 'CL', dial: '+56', es: 'Chile', en: 'Chile', flag: '🇨🇱' },
    { code: 'BR', dial: '+55', es: 'Brasil', en: 'Brazil', flag: '🇧🇷' },
    { code: 'PY', dial: '+595', es: 'Paraguay', en: 'Paraguay', flag: '🇵🇾' },
    { code: 'BO', dial: '+591', es: 'Bolivia', en: 'Bolivia', flag: '🇧🇴' },
    { code: 'PE', dial: '+51', es: 'Perú', en: 'Peru', flag: '🇵🇪' },
    { code: 'CO', dial: '+57', es: 'Colombia', en: 'Colombia', flag: '🇨🇴' },
    { code: 'EC', dial: '+593', es: 'Ecuador', en: 'Ecuador', flag: '🇪🇨' },
    { code: 'VE', dial: '+58', es: 'Venezuela', en: 'Venezuela', flag: '🇻🇪' },
    { code: 'MX', dial: '+52', es: 'México', en: 'Mexico', flag: '🇲🇽' },
    { code: 'PA', dial: '+507', es: 'Panamá', en: 'Panama', flag: '🇵🇦' },
    { code: 'CR', dial: '+506', es: 'Costa Rica', en: 'Costa Rica', flag: '🇨🇷' },
    { code: 'DO', dial: '+1', es: 'Rep. Dominicana', en: 'Dominican Republic', flag: '🇩🇴' },
    { code: 'US', dial: '+1', es: 'Estados Unidos', en: 'United States', flag: '🇺🇸' },
    { code: 'CA', dial: '+1', es: 'Canadá', en: 'Canada', flag: '🇨🇦' },
    { code: 'ES', dial: '+34', es: 'España', en: 'Spain', flag: '🇪🇸' },
    { code: 'PT', dial: '+351', es: 'Portugal', en: 'Portugal', flag: '🇵🇹' },
    { code: 'IT', dial: '+39', es: 'Italia', en: 'Italy', flag: '🇮🇹' },
    { code: 'FR', dial: '+33', es: 'Francia', en: 'France', flag: '🇫🇷' },
    { code: 'DE', dial: '+49', es: 'Alemania', en: 'Germany', flag: '🇩🇪' },
    { code: 'GB', dial: '+44', es: 'Reino Unido', en: 'United Kingdom', flag: '🇬🇧' },
] as const;

const ContactForm = () => {
    const { translations, language } = useTranslation();
    const contactForm = translations.contactForm;
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', country: 'AR', phone: '', company: '', message: '', website: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
        if (submitStatus !== 'idle') setSubmitStatus('idle');
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const selectedCountry = countries.find((country) => country.code === formData.country) ?? countries[0];
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, dialCode: selectedCountry.dial }),
            });

            if (!response.ok) throw new Error('Contact form request failed');

            setSubmitStatus('success');
            setFormData({ name: '', email: '', country: 'AR', phone: '', company: '', message: '', website: '' });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClassName = 'mt-2 block min-h-12 w-full rounded-xl border border-slate-700 bg-white/[0.06] px-4 py-3 text-base text-white placeholder:text-slate-500 transition focus:border-teal-400 focus:bg-white/[0.09] focus:outline-none';

    return (
        <div className="bg-slate-900/55 p-6 sm:p-10 lg:p-12">
            <div className="mb-8">
                <h3 className="text-[1.375rem] font-[650] tracking-[-0.5px] text-white">{contactForm.title}</h3>
                <p className="mt-2 max-w-xl text-base leading-7 text-slate-400">{contactForm.description}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="sr-only" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleInputChange} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="text-sm font-semibold text-slate-200">{contactForm.fields.name.label}</label>
                        <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className={inputClassName} placeholder={contactForm.fields.name.placeholder} />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-semibold text-slate-200">{contactForm.fields.email.label}</label>
                        <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className={inputClassName} placeholder={contactForm.fields.email.placeholder} />
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-sm font-semibold text-slate-200">{contactForm.fields.phone.label}</label>
                        <div className="mt-2 flex min-h-12 overflow-hidden rounded-xl border border-slate-700 bg-white/[0.06] transition focus-within:border-teal-400 focus-within:bg-white/[0.09]">
                            <label htmlFor="country" className="sr-only">{language === 'es' ? 'País' : 'Country'}</label>
                            <div className="relative w-28 shrink-0 border-r border-slate-700/80 bg-slate-950/35">
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    autoComplete="tel-country-code"
                                    className="min-h-12 w-full cursor-pointer appearance-none border-0 bg-transparent py-3 pl-3 pr-8 text-sm font-semibold text-white focus:outline-none"
                                    aria-label={language === 'es' ? 'País y código telefónico' : 'Country and phone code'}
                                >
                                    {countries.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.flag} {country.dial}
                                        </option>
                                    ))}
                                </select>
                                <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                </svg>
                            </div>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                inputMode="tel"
                                autoComplete="tel-national"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="min-h-12 min-w-0 flex-1 border-0 bg-transparent px-4 py-3 text-base text-white placeholder:text-slate-500 focus:outline-none"
                                placeholder={language === 'es' ? 'Número de teléfono' : 'Phone number'}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="company" className="text-sm font-semibold text-slate-200">{contactForm.fields.company.label}</label>
                        <input id="company" name="company" type="text" value={formData.company} onChange={handleInputChange} className={inputClassName} placeholder={contactForm.fields.company.placeholder} />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="text-sm font-semibold text-slate-200">{contactForm.fields.message.label}</label>
                    <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleInputChange} className={inputClassName} placeholder={contactForm.fields.message.placeholder} />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-h-6" aria-live="polite">
                        {submitStatus === 'success' && <p className="text-sm text-teal-300">{contactForm.success}</p>}
                        {submitStatus === 'error' && <p className="text-sm text-rose-300">{contactForm.error}</p>}
                    </div>
                    <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-50">
                        {isSubmitting ? contactForm.submit.loading : contactForm.submit.idle}
                        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
