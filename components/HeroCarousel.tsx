import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from '../services/i18n';

interface SlideProps {
    carousel: any;
}

const MedicalAppointmentSlide: React.FC<SlideProps> = ({ carousel }) => {
    const med = carousel.medical;
    return (
        <div className="flex flex-col gap-3 py-1">
            {/* User message 1 */}
            <div className="flex justify-end">
                <div className="max-w-[88%] rounded-2xl rounded-tr-sm border border-slate-200/80 bg-slate-100 px-3.5 py-2 text-xs leading-relaxed text-slate-800 shadow-sm sm:text-[13px] dark:border-slate-700/60 dark:bg-slate-800 dark:text-slate-100">
                    <p className="font-semibold text-[11px] text-teal-700 dark:text-teal-400 mb-0.5">{med.patientName}</p>
                    <p>{med.userMessage1}</p>
                </div>
            </div>

            {/* Bot message 1 */}
            <div className="flex justify-start">
                <div className="max-w-[94%] rounded-2xl rounded-tl-sm border border-teal-200/80 bg-teal-50/90 px-3.5 py-2.5 text-xs leading-relaxed text-slate-800 shadow-sm sm:text-[13px] dark:border-teal-900/60 dark:bg-teal-950/40 dark:text-slate-100">
                    <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-teal-600 text-[9px] font-bold text-white dark:bg-teal-500 dark:text-slate-950">
                            N
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                            NODAI Medical AI
                        </span>
                    </div>
                    <p>{med.botMessage1}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                        {med.slots.map((slot: string, idx: number) => (
                            <span
                                key={idx}
                                className={`rounded-lg border px-2 py-1 text-[11px] font-medium transition ${
                                    idx === 1
                                        ? 'border-teal-500 bg-teal-600 text-white shadow-sm dark:bg-teal-500 dark:text-slate-950'
                                        : 'border-teal-300/70 bg-white/90 text-teal-900 dark:border-teal-800 dark:bg-slate-900 dark:text-teal-200'
                                }`}
                            >
                                {slot}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* User message 2 */}
            <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-sm border border-slate-200/80 bg-slate-100 px-3.5 py-2 text-xs leading-relaxed text-slate-800 shadow-sm sm:text-[13px] dark:border-slate-700/60 dark:bg-slate-800 dark:text-slate-100">
                    <p>{med.userMessage2}</p>
                </div>
            </div>

            {/* Bot message 2 & Appointment Card */}
            <div className="flex justify-start">
                <div className="w-full max-w-[96%] rounded-2xl rounded-tl-sm border border-teal-200/80 bg-teal-50/90 p-3 text-xs shadow-sm sm:text-[13px] dark:border-teal-900/60 dark:bg-teal-950/40 dark:text-slate-100">
                    <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-teal-600 text-[9px] font-bold text-white dark:bg-teal-500 dark:text-slate-950">
                                N
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                                {med.botMessage2}
                            </span>
                        </div>
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                            {med.appointmentCard.badge}
                        </span>
                    </div>

                    {/* Appointment Card */}
                    <div className="mt-1.5 rounded-xl border border-teal-300/70 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <div className="flex items-start justify-between gap-2">
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                                    {med.appointmentCard.doctor}
                                </h4>
                                <p className="text-xs text-slate-600 dark:text-slate-300">
                                    {med.appointmentCard.specialty}
                                </p>
                            </div>
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-100 text-teal-700 dark:bg-teal-900/60 dark:text-teal-300">
                                🩺
                            </span>
                        </div>

                        <div className="mt-2.5 space-y-1.5 border-t border-slate-100 pt-2 text-[11px] text-slate-600 dark:border-slate-800 dark:text-slate-300">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-teal-700 dark:text-teal-400">📅</span>
                                <span>{med.appointmentCard.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-teal-700 dark:text-teal-400">📍</span>
                                <span>{med.appointmentCard.location}</span>
                            </div>
                        </div>

                        <div className="mt-2.5 flex items-center justify-between rounded-lg bg-emerald-50/80 px-2.5 py-1.5 text-[10px] font-medium text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                            <span>{med.appointmentCard.calendarNotice}</span>
                            <span className="font-bold">✓</span>
                        </div>
                    </div>

                    <p className="mt-2 text-[11px] text-slate-600 dark:text-slate-400">
                        {med.botMessage3}
                    </p>
                </div>
            </div>
        </div>
    );
};

const RealEstateSlide: React.FC<SlideProps> = ({ carousel }) => {
    const re = carousel.realEstate;
    return (
        <div className="flex flex-col gap-3 py-1">
            {/* User message 1 */}
            <div className="flex justify-end">
                <div className="max-w-[88%] rounded-2xl rounded-tr-sm border border-slate-200/80 bg-slate-100 px-3.5 py-2 text-xs leading-relaxed text-slate-800 shadow-sm sm:text-[13px] dark:border-slate-700/60 dark:bg-slate-800 dark:text-slate-100">
                    <p className="font-semibold text-[11px] text-teal-700 dark:text-teal-400 mb-0.5">{re.clientName}</p>
                    <p>{re.userMessage1}</p>
                </div>
            </div>

            {/* Bot message 1 */}
            <div className="flex justify-start">
                <div className="w-full max-w-[96%] rounded-2xl rounded-tl-sm border border-teal-200/80 bg-teal-50/90 p-3 text-xs leading-relaxed text-slate-800 shadow-sm sm:text-[13px] dark:border-teal-900/60 dark:bg-teal-950/40 dark:text-slate-100">
                    <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-teal-600 text-[9px] font-bold text-white dark:bg-teal-500 dark:text-slate-950">
                            N
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                            NODAI Real Estate AI
                        </span>
                    </div>
                    <p className="mb-2">{re.botMessage1}</p>

                    {/* Property Cards */}
                    <div className="space-y-2">
                        {re.properties.map((prop: any, idx: number) => (
                            <div
                                key={idx}
                                className="rounded-xl border border-teal-200/90 bg-white p-2.5 shadow-sm transition hover:border-teal-400 dark:border-slate-700 dark:bg-slate-900"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-xs">🏢</span>
                                            <h5 className="font-bold text-slate-900 text-xs dark:text-white">
                                                {prop.title}
                                            </h5>
                                        </div>
                                        <p className="mt-0.5 text-[11px] text-slate-600 dark:text-slate-300">
                                            {prop.specs}
                                        </p>
                                    </div>
                                    <span className="shrink-0 rounded-md bg-teal-100 px-1.5 py-0.5 text-[10px] font-bold text-teal-800 dark:bg-teal-900/50 dark:text-teal-300">
                                        {prop.badge}
                                    </span>
                                </div>
                                <div className="mt-1.5 flex items-center justify-between border-t border-slate-100 pt-1.5 text-xs font-semibold text-slate-800 dark:border-slate-800 dark:text-slate-200">
                                    <span className="text-teal-700 dark:text-teal-400">{prop.price}</span>
                                    <button
                                        type="button"
                                        className="inline-flex items-center text-[10px] font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400"
                                    >
                                        {re.viewDetails || 'Ver detalles →'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* User message 2 */}
            <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-sm border border-slate-200/80 bg-slate-100 px-3.5 py-2 text-xs leading-relaxed text-slate-800 shadow-sm sm:text-[13px] dark:border-slate-700/60 dark:bg-slate-800 dark:text-slate-100">
                    <p>{re.userMessage2}</p>
                </div>
            </div>

            {/* Bot message 2 */}
            <div className="flex justify-start">
                <div className="w-full max-w-[94%] rounded-2xl rounded-tl-sm border border-emerald-200/90 bg-emerald-50/80 p-3 text-xs leading-relaxed text-slate-800 shadow-sm sm:text-[13px] dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-slate-100">
                    <div className="flex items-center gap-1.5 mb-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                        <span>✅ {re.visitScheduledBadge || 'VISITA AGENDADA'}</span>
                    </div>
                    <p>{re.botMessage2}</p>
                </div>
            </div>
        </div>
    );
};

const SolutionsSlide: React.FC<SlideProps> = ({ carousel }) => {
    const sol = carousel.solutions;
    return (
        <div className="flex flex-col gap-2.5 py-1">
            <div className="flex items-center justify-between px-1 mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                    {sol.tag}
                </span>
                <span className="rounded-full bg-teal-100 px-2.5 py-0.5 font-mono text-[10px] font-bold text-teal-800 dark:bg-teal-900/50 dark:text-teal-300">
                    {sol.badge}
                </span>
            </div>

            <div className="space-y-2.5">
                {sol.items.map((item: any, idx: number) => (
                    <article
                        key={idx}
                        className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-sm transition hover:border-teal-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-2.5">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 font-mono text-xs font-bold text-teal-700 dark:bg-teal-950/70 dark:text-teal-300">
                                    0{idx + 1}
                                </span>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-900 dark:text-white sm:text-sm">
                                        {item.title}
                                    </h4>
                                    <p className="mt-0.5 text-[11px] leading-4 text-slate-600 dark:text-slate-300">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                            <span className="shrink-0 rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                {item.metric}
                            </span>
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-1 rounded-lg border border-teal-200/60 bg-teal-50/50 px-3 py-2 text-center dark:border-teal-900/50 dark:bg-teal-950/30">
                <p className="text-[11px] font-medium text-slate-600 dark:text-slate-300">
                    {sol.footerNote || 'Tecnología modular lista para conectar con tu software de gestión actual.'}
                </p>
            </div>
        </div>
    );
};

export const HeroCarousel: React.FC = () => {
    const { translations } = useTranslation();
    const carousel = translations.hero.carousel;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const totalSlides = 3;

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    // Auto-advance timer (every 6.5 seconds), paused on mouse hover
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextSlide, 6500);
        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    const tabs = [
        { id: 0, label: carousel.tabs.medical, icon: '🩺' },
        { id: 1, label: carousel.tabs.realEstate, icon: '🏢' },
        { id: 2, label: carousel.tabs.solutions, icon: '⚡' },
    ];

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Soft ambient background glow */}
            <div
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-teal-200/25 via-emerald-100/20 to-teal-300/20 blur-2xl dark:from-teal-500/10 dark:via-emerald-500/5 dark:to-teal-400/10"
                aria-hidden="true"
            />

            {/* Main polished container with balanced, non-jarring colors */}
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white/95 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
                {/* Window header */}
                <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/90">
                    <div className="flex items-center gap-2" aria-hidden="true">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                            {carousel.statusOnline}
                        </span>
                    </div>
                </div>

                {/* Tabs selection bar */}
                <div className="flex border-b border-slate-200/70 bg-slate-100/60 p-1.5 dark:border-slate-800 dark:bg-slate-950/40">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setCurrentSlide(tab.id)}
                            className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl px-2.5 py-2 text-xs font-semibold transition ${
                                currentSlide === tab.id
                                    ? 'bg-white text-teal-800 shadow-sm dark:bg-slate-800 dark:text-teal-300'
                                    : 'text-slate-600 hover:bg-white/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200'
                            }`}
                        >
                            <span>{tab.icon}</span>
                            <span className="truncate">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Slide content area */}
                <div className="min-h-[410px] p-3 sm:p-4">
                    {currentSlide === 0 && <MedicalAppointmentSlide carousel={carousel} />}
                    {currentSlide === 1 && <RealEstateSlide carousel={carousel} />}
                    {currentSlide === 2 && <SolutionsSlide carousel={carousel} />}
                </div>

                {/* Bottom navigation & slide indicators */}
                <div className="flex items-center justify-between border-t border-slate-200/70 bg-slate-50/70 px-4 py-2.5 dark:border-slate-800 dark:bg-slate-900/70">
                    <button
                        type="button"
                        onClick={prevSlide}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-xs transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                        aria-label={carousel.prevSlide}
                    >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Dots indicators */}
                    <div className="flex items-center gap-1.5">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setCurrentSlide(tab.id)}
                                className={`h-2 rounded-full transition-all ${
                                    currentSlide === tab.id
                                        ? 'w-6 bg-teal-600 dark:bg-teal-400'
                                        : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600'
                                }`}
                                aria-label={`Slide ${tab.id + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={nextSlide}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-xs transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                        aria-label={carousel.nextSlide}
                    >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
