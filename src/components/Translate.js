import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },
];


const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, settext] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => settext(e.target.value)} />
                </div>
            </div>

            <Dropdown
                label='Select a language'
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr/>
            <h3 className='ui header'>Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;