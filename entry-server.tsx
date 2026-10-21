import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import type { Language } from './services/i18n';

export const render = (language: Language) => renderToString(<App initialLanguage={language} />);
