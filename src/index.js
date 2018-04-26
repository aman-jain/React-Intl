import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { addLocaleData, IntlProvider } from 'react-intl';

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import messages from './messages';
import flattenMessages from './util';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

addLocaleData([...en, ...es]);

let locale = (navigator.languages && navigator.languages[0])
|| navigator.language
|| navigator.userLanguage
|| 'en-US';

console.log(locale);
ReactDOM.render(
    <IntlProvider locale={locale} messages={messages[locale]}>
        <App />
    </IntlProvider>, 
    document.getElementById('root'));
registerServiceWorker();
