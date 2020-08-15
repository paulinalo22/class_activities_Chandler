import React, { useContext } from 'react';
import LanguageContext from '../../utils/LanguageContext';

function LanguageSelector() {
    const { language, handleLanguageBtnClick } = useContext(LanguageContext);
    return (
      <div>
        <h3 className="text-center">Select the user language below:</h3>
        <div className="language-btn" onClick={handleLanguageBtnClick} data-value="back">
          <span className="text-center"onClick={handleLanguageBtnClick} data-value="next">{language}</span>
        </div>
      </div>
    );
  }
  
  export default LanguageSelector;