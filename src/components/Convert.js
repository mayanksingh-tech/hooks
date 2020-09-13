import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const Convert = ({language,text}) => {
    const [translate,settranslate] = useState('');
    const [debouncedText,setDebouncedtext] = useState(text);

    useEffect( () => {
        const timeid=setTimeout( () => {
            setDebouncedtext(text)
        }, 500);

        return () => {
            clearTimeout(timeid);
        }
    },[text]);

    useEffect( () => {
        const doTranslate = async () => {
         const {data} = await  Axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                 q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM'
                }
            });
            settranslate(data.data.translations[0].translatedText)
        }
        doTranslate();
    }, [language, debouncedText]);
    return (
        <div className='ui header'>
            {translate}
        </div>
    )
    
};

export default Convert;