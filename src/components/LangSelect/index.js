import React from "react";
import { UseLangContext } from "../../contexts/LangContext";
import LangKeys from '../../constants/langKeys';


const LanguageSelect = (hasHeader) => {
    const { lang, setLang } = UseLangContext();

    const selectStyles = {
        position: 'absolute',
        top: hasHeader ? '35px' : '16px',
        right: hasHeader ? '50px' : '16px',
        height: '27px',
        width: '71px',
        fontSize: '10px',
        zIndex: 9999
    }

    return (
        <select onChange={e => setLang(e.target.value)} style={selectStyles}>
            <option value={LangKeys.PT} selected={LangKeys.PT === lang}>
                Português
            </option>
            <option value={LangKeys.EN} selected={LangKeys.EN === lang}>
                English
            </option>
        </select>
    );
};

export default LanguageSelect;