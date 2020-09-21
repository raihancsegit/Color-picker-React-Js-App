import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

 const Speece = () => {
     const [value,setValue] = React.useState('');
     const {speak} = useSpeechSynthesis();
    return (
        <div className="speece">
            <div className="group">
                <textarea rows="10" value={value} onChange={(e) => setValue(e.target.value)}></textarea>
            </div>
            <div className="group">
                <button onClick={()=> speak({text:value})}>Submit</button>
            </div>
        </div>
    )
}

export default Speece;
