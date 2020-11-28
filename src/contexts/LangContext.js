import React, { useContext, useState } from 'react';
import PT from '../i18n/pt.json';
import EN from '../i18n/en.json';
import LangKeys from '../constants/langKeys';

const translations = {
  [LangKeys.PT]: PT,
  [LangKeys.EN]: EN
};

const LangContext = React.createContext({
  lang: LangKeys.PT,
  setLang: null,
  texts: translations[LangKeys.PT]
});

LangContext.displayName = 'LangContext'

export const LangContextWrapper = ({ children }) => {
  const [lang, setLang] = useState(LangKeys.PT);
  const [texts, setTexts] = useState(translations[LangKeys.PT]);

  const _setLang = (lang) => {
    setLang(lang);
    setTexts(translations[lang]);
  }

  return (
  <LangContext.Provider value={{lang, setLang: _setLang, texts}}>
    { children }
  </LangContext.Provider>)
}

export const UseLangContext = () => {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error('Para utilizar o context este componente deve esta dentro do LangContextWrapper');
  }
  return context;
}

