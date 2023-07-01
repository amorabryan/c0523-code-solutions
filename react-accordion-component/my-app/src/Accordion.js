import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ languages }) {
  const [clicked, setClicked] = useState('');

  function handleLanguageClick(language) {
    clicked === language ? setClicked('') : setClicked(language);
  }

  return (
    <Languages
      languages={languages}
      handleOnClick={handleLanguageClick}
      clicked={clicked}
    />
  );
}

function Languages({ languages, handleOnClick, clicked }) {
  function renderAbout(language) {
    return clicked === language ? <p>{language.about}</p> : null;
  }

  return (
    <div className="language-tab">
      {languages.map((language) => {
        return (
          <div key={language.language}>
            <button
              className="names"
              type="button"
              onClick={(event) => handleOnClick(language)}>
              {language.language}
            </button>
            {renderAbout(language)}
          </div>
        );
      })}
    </div>
  );
}
