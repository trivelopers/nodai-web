import React, { useState, useCallback } from 'react';
import { getComplexAnalysis } from '../services/geminiService';
import NodaiLogo from './NodaiLogo';
import { useTranslation } from '../services/i18n';

interface ThinkingModeModalProps {
    onClose: () => void;
}

const ThinkingModeModal: React.FC<ThinkingModeModalProps> = ({ onClose }) => {
    const { translations } = useTranslation();
    const thinkingMode = translations.thinkingMode;

    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim() || isLoading) return;

        setIsLoading(true);
        setError('');
        setResponse('');

        try {
            const result = await getComplexAnalysis(prompt);
            setResponse(result);
        } catch (err) {
            if (err instanceof Error && err.message) {
                setError(err.message);
            } else {
                setError(thinkingMode.genericError);
            }
        } finally {
            setIsLoading(false);
        }
    }, [prompt, isLoading, thinkingMode.genericError]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm" onClick={onClose}>
            <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col mx-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center p-4 border-b dark:border-slate-700">
                    <NodaiLogo className="h-6 text-slate-800 dark:text-slate-100" />
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-200">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <div className="p-6 flex-grow overflow-y-auto">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{thinkingMode.title}</h2>
                    <p className="text-sm text-gray-600 dark:text-slate-300 mb-4">
                        {thinkingMode.description}
                    </p>

                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder={thinkingMode.placeholder}
                            className="w-full h-32 p-3 border border-gray-300 dark:bg-slate-700 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-slate-900 dark:text-white dark:placeholder-slate-400"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !prompt.trim()}
                            className="mt-4 w-full bg-teal-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center transition"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    {thinkingMode.buttonLoading}
                                </>
                            ) : (
                                thinkingMode.buttonIdle
                            )}
                        </button>
                    </form>

                    {(response || error) && (
                        <div className="mt-6 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-md border dark:border-slate-600">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-100 mb-2">{thinkingMode.responseTitle}</h3>
                            {error && <p className="text-red-600 dark:text-red-500">{error}</p>}
                            {response && <div className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br />') }} />}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ThinkingModeModal;
