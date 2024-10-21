// src/WordCount.js
import React, { useState } from 'react';
import './WordCount.css'; // Create a CSS file for styling

const WordCount = () => {
    const [inputText, setInputText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    const handleTextChange = (event) => {
        const text = event.target.value;
        setInputText(text);
        setWordCount(countWords(text));
    };

    const countWords = (text) => {
        if (!text.trim()) return 0; // Return 0 if input is empty or only spaces
        return text.trim().split(/\s+/).length; // Split by whitespace and count
    };

    return (
        <div className="word-count-container">
            <h2>Word Count Tool</h2>
            <textarea
                className="input-area"
                value={inputText}
                onChange={handleTextChange}
                placeholder="Type or paste your text here..."
            />
            <div className="word-count-display">
                <p>Word Count: {wordCount}</p>
            </div>
        </div>
    );
};

export default WordCount;