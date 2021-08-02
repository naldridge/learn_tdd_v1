import { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
    const [inputText, setInputText] = useState('');

    const _handleChange = (e) => {
        setInputText(e.target.value);
    }

    const _handleSend = (e) => {
        e.preventDefault();
        onSend(inputText);
        setInputText('');
    }


    return (
        <div>
            <input 
            type="text" 
            data-testid="messageText" 
            value={inputText} 
            onChange={(e) => _handleChange(e)} 
            />
            <button 
            type="button" 
            data-testid="sendButton"
            onClick={(e) => _handleSend(e)}>Send</button>
        </div>

    );
}

export default NewMessageForm;